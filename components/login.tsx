import React from 'react';
import { useUser } from '../lib/UserContext';

const Login = () => {
  const { setUser } = useUser();

  const handleLogin = () => {
    // Simulate an API call or authentication logic here
    setUser({
      isAuthenticated: true,
      roles: ['premium'], // this should be fetched dynamically based on the user's actual roles
    });

    // Optionally, you can redirect the user to a dashboard or home page after login
    // For example, using Next.js router:
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="username">
              Login to see premium content. Just click the button. 
            </label>
            {/* <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            /> */}
          </div>
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div> */}
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
