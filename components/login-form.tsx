import LoginFormEvent from '../types/login-form-event'

type Props = {
  errorMessage?: string
  onSubmit: (e: LoginFormEvent) => void
}

const LoginForm = ({ errorMessage, onSubmit }: Props) => {
  return (
    <div className="flex items-center justify-center w-full bg">
      <form className="bg-gray-50 px-8 pt-6 pb-8" onSubmit={onSubmit} >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        </div>
        {errorMessage && (
          <div>
            <span className="text-red-700">{errorMessage}</span>
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6" type="submit">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm