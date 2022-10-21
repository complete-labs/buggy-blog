import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Container from "../components/container"
import Layout from "../components/layout"
import LoginForm from "../components/loginform"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"

const Login = (props: any) => {
  let router = useRouter()
  function redirect() {
    router.push("/")
  }
  useEffect(() => {
    localStorage.getItem("loginToken") && redirect()
  }, [])
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <LoginForm />
        </Container>
      </Layout>
    </>
  )
}

export default Login
