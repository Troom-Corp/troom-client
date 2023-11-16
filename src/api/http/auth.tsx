import axios from 'axios'

export const API_AUTH_URL = 'http://localhost:5000/api/auth/users'

const $auth = axios.create({
  withCredentials: true,
  baseURL: API_AUTH_URL
})

$auth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$auth.interceptors.response.use((config) => {
  return config
})

export default $auth