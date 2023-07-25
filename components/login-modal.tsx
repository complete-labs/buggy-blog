import LoginForm from './login-form'
import LoginFormEvent from '../types/login-form-event'

type Props = {
  errorMessage?: string
  onSubmit: (e: LoginFormEvent) => void
}

const LoginModal = ({ errorMessage, onSubmit }: Props) => {
  return (
    <div className="flex h-screen w-screen justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="flex flex-col items-center justify-center p-16 bg-gray-50 shadow appearance-none border rounded">
        <h2 className="text-2xl">Sign in to view this premium article.</h2>
        <LoginForm errorMessage={errorMessage} onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default LoginModal