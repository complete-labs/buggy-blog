import { SessionProvider } from "next-auth/react";
import { Login } from "../components/loginButton";
import "../styles/index.css";

export default function App({
  //@ts-ignore
  Component,
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Login />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
