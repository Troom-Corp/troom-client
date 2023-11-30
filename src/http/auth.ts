import axios from 'axios'

export const API_AUTH_URL = 'http://localhost:5000/api/auth'

const $auth = axios.create({
  withCredentials: true,
  baseURL: API_AUTH_URL
})

export default $auth