import { UserContext } from './user-context'
import { useContext } from 'react'
import Router from 'next/router'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

type Props = {
  redirect: string
}

const Login = ({ redirect }: Props) => {
  
  const { user, activateUser } = useContext(UserContext)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    // Prevent the redirect
    e.preventDefault()

    const form = e.target as HTMLFormElement;
    const data = new FormData(form)

    const username = data.get('username') as string
    const password = data.get('password') as string

    // Static login Credentials
    if(password != '123' || username != 'admin@gmail.com'){ return }

    activateUser?.()
    cookies.set('username', username)

    // No need to reload, states manage it!
    //Router.reload()
  }

  return (
  <div className="login-wall">
    <form onSubmit={onSubmit}>

      <h2>
        <svg className="login-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 174.72"><path d="M121,76V48a48,48,0,0,0-96,0V76H0v98.72H146V76ZM45,48a28,28,0,0,1,56,0V76H45Zm81,106.72H20V96H126Z"/><rect x="62.93" y="115.29" width="20.15" height="20.15"/></svg>
        Please login to view this post
      </h2>

      <input type="email" autoComplete="username" id="username" name="username" placeholder="Your Email" required />
      <input type="password" autoComplete="current-password" id="password" name="password" placeholder="Your Password" required />

      <button type="submit" className="btn">Login</button>

    </form>
  </div>
  )
}

export default Login