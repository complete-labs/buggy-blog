import Layout from './../../components/layout';
import Container from './../../components/container';
import LoginWidget from './../../components/login-widget';

const Login = () => {
  return (
    <Layout>
      <Container>
        <LoginWidget preview={false} />
      </Container>
    </Layout>
  )
}

export default Login

type Params = {
  params: {
    slug: string
  }
}