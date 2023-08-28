import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username === 'admin' && password === 'password') {
      Cookies.set('loggedIn', 'true')
      router.push('/')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f3f3' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </label>
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#0070f3', color: 'white', cursor: 'pointer' }}>Log in</button>
      </form>
    </div>
  )
}

export default Login
