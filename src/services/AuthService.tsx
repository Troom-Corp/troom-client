import $api from "@/http/auth"
import { AxiosResponse } from "axios"
import { AuthResponse } from "@/models/response/AuthResponse"

export default class AuthService {
  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/sign_up', { email, password })
  }
}