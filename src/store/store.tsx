import { makeAutoObservable } from 'mobx'
import { IUser } from '@/models/interfaces/IUser'

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
}