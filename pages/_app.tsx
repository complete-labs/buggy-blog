import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/index.css';
import { Session } from 'next-auth';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
