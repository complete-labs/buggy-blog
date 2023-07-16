import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/index.css";
import Nav from "../components/nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps as { session: any };

  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
