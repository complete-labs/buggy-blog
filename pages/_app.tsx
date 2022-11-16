import { getCookie, setCookie } from 'cookies-next'
import { AppProps } from 'next/app'
import { useState } from 'react'
import { UserContext } from '../lib/auth'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const defaultUser = getCookie('user')
  const [user, setUser] = useState(defaultUser)
  const login = () => {
    setCookie('user', '123password')
    setUser(getCookie('user'))
  }
  return (
    <UserContext.Provider value={{ user, login }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
