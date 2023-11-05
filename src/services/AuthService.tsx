import $api from "@/http/auth"
import { AxiosResponse } from "axios"
import { AuthResponse } from "@/models/response/AuthResponse"

export default class AuthService {
  
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/sign_in', { email, password })
  }
  
  static async registration(firstname: string, secondname: string, nick: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/sign_up', { firstname, secondname, nick, email, password })
  }
}