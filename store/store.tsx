import { makeAutoObservable } from 'mobx'
import { IUser } from '../models/interfaces/IUser'
import AuthService from '../services/AuthService'

export default class Store {
  user = {} as IUser
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  async signIn(login: string, password: string) {
    try {
      const response = await AuthService.signIn(login, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async firstSignUp(firstName: string, secondName: string, nick: string, email: string, password: string) {
    try {
      const response = await AuthService.firstSignUp(firstName, secondName, nick, email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
  
  async secondSignUp(email: string, password: string,) {
    try {
      const response = await AuthService.secondSignUp(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}