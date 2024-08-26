import {FC, FormEvent, useState} from "react";
import {EMAIL, PASSWORD} from "../lib/constants";
import {useRouter} from "next/router";
import Cookies from "js-cookie";

interface LoginFormProps {
  redirectTo?: string
}

const LoginForm: FC<LoginFormProps> = ({redirectTo}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email === EMAIL && password === PASSWORD) {
      setMessage('Login successful, redirecting...');
      Cookies.set('isLoggedIn', true, { expires: 365 });
      router.push(`posts/${redirectTo}` || '/');
    } else {
      setMessage('Invalid login credentials');
    }
  }

  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-4 my-4 max-w-md">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </div>
        <div>
          {message && <p className="text-gray-500">{message}</p>}
        </div>
        </form>
    </div>
  )
}

export default LoginForm