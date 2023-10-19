import { AppProps } from 'next/app';
import '../styles/index.css';
import SessionProvider from '../context/SessionProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    //  gets and sets session globally in our app using React Context
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
