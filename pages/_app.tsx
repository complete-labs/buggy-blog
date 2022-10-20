import { AppProps } from "next/app";
import { AuthProvider } from "../components/auth_context";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
