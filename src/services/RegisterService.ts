import $auth from '@/http/auth'
import { AxiosResponse } from 'axios'

type RegisterType = (login: string, password: string) => Promise<AxiosResponse<string>>


const checkData = async (value: string) => {
  try {
    const response = await $auth.post('/users/validate_credentials', { value })
    return response.status !== 409
  } catch (e) {
    console.log('Error', e)
    throw e
  }
}

const RegisterService: RegisterType = async (login, password) => {
  return $auth.post<string>('/users/sign_up', { login, password })
}

export default RegisterService