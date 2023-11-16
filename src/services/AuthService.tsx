import $auth from '@/api/http/auth'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '@/models/AuthResponse'

export default class AuthService {
  
  static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $auth.post<AuthResponse>('/sign_in', { login, password })
  }
  
  static async register( login: string, password: string ): Promise<AxiosResponse<AuthResponse>> {
    return $auth.post<AuthResponse>('/sign_up', {login, password })
  }
  
  static async logout(): Promise<void> {
    return $auth.post('/logout')
  }
}