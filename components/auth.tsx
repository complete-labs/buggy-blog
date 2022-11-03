import { useState } from 'react';

const CORRECT_CREDENTIALS = {
  username: 'cade',
  password: 'pancakes',
}

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  return (
    <form className="flex flex-row" onSubmit={(e) => {
      e.preventDefault();

      if (username === CORRECT_CREDENTIALS.username && password === CORRECT_CREDENTIALS.password) {
        localStorage.setItem('authenticated', 'true');
        window.location.reload();
      } else {
        setError('Incorrect username or password!');
      }
    }}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <div className="mt-1">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="johndoe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="password"
          />
        </div>
      </div>
      <button type="submit">Log in!</button>
      {error && <span className="text-red-700">{error}</span>}
    </form>
  )
}

export default Auth
