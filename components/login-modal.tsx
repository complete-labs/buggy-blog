import { useState } from 'react'
import LoginForm from './login-form'
import LoginFormEvent from '../types/login-form-event'
import { loginService } from '../utils/login-service'

type Props = {
  title: string
  onLogin(): void
  onClose?(): void
}

const LoginModal = ({ title, onLogin, onClose }: Props) => {
  const [error, setError] = useState<string>()
  const onSubmit = (e: LoginFormEvent) => {
    e.preventDefault()
    setError(undefined)

    try {
      loginService(e.target.username.value, e.target.password.value)
      onLogin()
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 shadow appearance-none border rounded">
        {onClose && (<div className="self-end p-2 cursor-pointer" onClick={onClose}>x</div>)}
        <h2 className="text-2xl">{title}</h2>
        <LoginForm errorMessage={error} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default LoginModal