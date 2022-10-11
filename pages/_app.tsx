import { AppProps } from 'next/app'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

import { ContentProvider } from '../components/user-context';


import '../styles/index.css'


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ContentProvider>
      <Component {...pageProps} />
    </ContentProvider>
  )

}



