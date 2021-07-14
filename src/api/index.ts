import axios from 'axios'
import { setupInterceptor } from './inteceptor'

let api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:4000',
})

api = setupInterceptor(api)

export default api
