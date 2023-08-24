import { AppProps } from 'next/app'
import '../styles/index.css'
import { UserProvider } from './UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
}