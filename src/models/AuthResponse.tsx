import { IUser } from './interface/IUser'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}