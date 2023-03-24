import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
