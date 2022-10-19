import { AppProps } from 'next/app'
import '../styles/index.css'
import { LoginContext } from '../components/LoginContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <LoginContext><Component {...pageProps} /></LoginContext>)
}
