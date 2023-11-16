import { IUser } from "@/models/interface/IUser";
import AuthService from "@/services/AuthService";
import ProfileService from "@/services/ProfileService";
import { makeAutoObservable } from "mobx";

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

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  
  async register(login: string, password: string) {
    try {
      const response = await AuthService.register(login, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  
  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}