import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { useState } from 'react';
import Router from 'next/router'
import { setCookie} from 'nookies'

export default function Paywall() {

  const [inputs, setInputs] = useState({ username: '', password: '' });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (inputs.username == 'u' && inputs.password == 'p') {
      setCookie(null,'isAuthenticated', 'true');
      const {post} = Router.query;
      Router.push({
        pathname: `/posts/${post}`,
      })
    }
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Username:
              <input
                type="text"
                name="username"
                value={inputs.username || ''}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="title">Password:
              <input
                type="text"
                name="password"
                value={inputs.password || ''}
                onChange={handleChange}
              />
            </label>
            <input
              type="submit"
              value="Login"
            />
          </form>
        </Container>
      </Layout>
    </>
  )
}