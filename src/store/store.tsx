import { makeAutoObservable } from 'mobx'
import { IUser } from '@/models/interfaces/IUser'
import AuthService from '@/services/AuthService'

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

  async registration(email: string, password: string) {
    try {
        const response = await AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      }
     catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}