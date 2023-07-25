import { getCookie } from 'cookies-next'
import { SESSION_COOKIE_NAME } from '../lib/constants'

export const authorizeService = () => {
  const cookie = getCookie(SESSION_COOKIE_NAME)
  return cookie !== undefined
}