import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CookiesProvider } from "react-cookie";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <CookiesProvider>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </CookiesProvider>
      </Html>
    )
  }
}
