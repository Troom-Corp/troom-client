import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../models/response/AuthResponse";
import { LoginData, RegistrationData } from "../models/types";

export default class AuthService {
  static async login(data: LoginData): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/login', data)
  }

  static async registration(data: RegistrationData): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/registration', data)
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}