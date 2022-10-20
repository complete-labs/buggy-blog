import { useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setCookie(null, 'username', username, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.push('/')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center'
      >
        <h1 className='text-4xl font-bold text-black mb-4'>Login</h1>
        <input
          className='border-2 border-black px-4 py-2 mb-4 rounded-md'
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='border-2 border-black px-4 py-2 mb-4 rounded-md'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-black text-white px-4 py-2 rounded-md'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
