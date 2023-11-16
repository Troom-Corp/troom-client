import $auth from '@/api/http/auth'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '@/models/AuthResponse'
import { ProfileResponse } from '@/models/ProfileResponse'
import $profile from '@/api/http/profile'

export default class ProfileService {

  static async getProfile(login: string): Promise<AxiosResponse<ProfileResponse>> {
    return $profile.get(`/users/@${login}`)
  }
}