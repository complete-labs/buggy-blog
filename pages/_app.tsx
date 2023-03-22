import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [initialRender, setInitialRender] = useState(false)

  // this takes care of the window undefined issue
  useEffect(() => {
    setInitialRender(true)
  }, [])


  if(!initialRender) return null
  return <Component {...pageProps} />
}
