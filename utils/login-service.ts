import { setCookie } from 'cookies-next'

import User from '../types/user'
import { SESSION_COOKIE_NAME } from '../lib/constants'

export const loginService = (username: string, password: string) => {
  const users: User[] = require('data/users.json')
  const user = users.find(user => user.username === username && user.password === password)
  if (user) {
    setCookie(SESSION_COOKIE_NAME, user.username)
  } else {
    throw new Error("Username and password not found")
  }
}