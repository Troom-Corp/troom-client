import axios from 'axios'

export const API_PROFILE_URL = 'http://127.0.0.1:5000/api'

const $profile = axios.create({
  baseURL: API_PROFILE_URL
})

export default $profile