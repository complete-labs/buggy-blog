import { AppProps } from 'next/app'
import { LoginContext } from '../lib/login'
import '../styles/index.css'
import {useEffect, useState} from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
      const initialIsLoggedIn = (localStorage.getItem("login") ?? "false") === "true";
      setIsLoggedIn(initialIsLoggedIn);
  }, [setIsLoggedIn]);
  useEffect(() => {
      localStorage.setItem("login", `${isLoggedIn}`);
  }, [isLoggedIn]);
  const loginContext = { isLoggedIn, setIsLoggedIn };
  return (
      <LoginContext.Provider value={loginContext}>
          <Component {...pageProps} />
      </LoginContext.Provider>
  )
}
