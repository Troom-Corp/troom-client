import $api from '@/http/auth'
import { AxiosResponse } from 'axios'
import { IUser } from '@/models/interfaces/IUser'

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users')
  }
}