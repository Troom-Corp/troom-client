import { makeAutoObservable } from 'mobx'
import { IUser } from '@/models/interfaces/IUser'
import AuthService from '@/services/AuthService'
import { API_URL } from '@/http/auth'
import { AuthResponse } from '@/models/response/AuthResponse'
import axios from 'axios'

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

  async login(email: string, password: string) {
    try {
        const response = await AuthService.login(email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      }
     catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async registration(firstname: string, secondname: string, nick: string, email: string, password: string) {
    try {
        const response = await AuthService.registration(firstname, secondname, nick, email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      }
     catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh_token`, {withCredentials: true})
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}