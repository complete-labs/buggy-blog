import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {

}

const LoginModal = ({
}: Props) => {
  const handleLogin = () => {
    // const { email, password } = document.cookie;
  }

  return (
      <div className="mb-8 md:mb-16" style={{position: 'fixed', top: 0, height: '100vh', width: '100vw', backgroundColor: 'red', opacity: 0.8}}>
        <form>
          <label>Email</label>
          <input type='text'></input>
          <label>Password</label>
          <input type='text'></input>
          <button type='submit' onClick={handleLogin}>Login</button>
        </form>
      </div>
  )
}

export default LoginModal
