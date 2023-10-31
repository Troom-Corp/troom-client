import $api from '../http/auth'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'


export default class AuthService {
  static async signIn(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign_in', { email, password })
  }

  static async firstSignUp(firstName: string, secondName: string, nick: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign_up', { firstName, secondName, nick, email, password })
  }
  
  static async secondSignUp(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign_up', { email, password })
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}