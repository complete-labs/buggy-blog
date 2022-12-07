import '../styles/index.css'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps}: AppProps<{
  session: Session;
}>) {
  return (
  <SessionProvider
      session={pageProps.session}
    >
    <Component {...pageProps} />
    </SessionProvider>
)}
