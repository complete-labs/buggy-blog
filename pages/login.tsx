import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import PostTitle from '../components/post-title'
import {useRouter} from "next/router";
import LoginForm from "../components/login-form";

const Login = () => {
  const router = useRouter()

  return (
    <Layout>
      <Container>
        <Header />
        <PostTitle>Login to access premium content</PostTitle>
        <LoginForm redirectTo={router.query.redirectTo as string} />
      </Container>
    </Layout>
  )
}

export default Login
