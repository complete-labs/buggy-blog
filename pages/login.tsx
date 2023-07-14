import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { useRouter } from 'next/router'



const Login = () => {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const checkIfUserIsLoggedIn = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')); // Retrieve the login status from local storage

    if (userInfo?.isLoggedIn) {
      // If the user is logged in, redirect to the index page
      router.push('/');
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event?.target?.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event?.target?.value);
  }
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Perform login logic, e.g., call an API to validate credentials
      // For simplicity, let's assume the login is successful and we receive a token
      if(userName === "Madhu") {
        const mockUserInfo = {name:"Madhu", isLoggedIn : true};
        // Store the token in local storage
        localStorage.setItem('userInfo', JSON.stringify(mockUserInfo));
        router.back();
      } else {
        alert('Invalid username or password');
      }
  }
  
  return (
    <>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
        <Container>
          <form onSubmit={handleLogin} className='space-y-2.5'>
            <label className="block" htmlFor='username'>
              <span className="block text-sm font-medium text-slate-700">Username</span>
              <input type="text" id="username" value={userName} onChange={handleUserNameChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </label>
            <label className="block" htmlFor='password'>
              <span className="block text-sm font-medium text-slate-700">Password</span>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </label>

            <button type="submit" className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded">
              Login
            </button>
          </form>
        </Container>
      </Layout>
    </>
  )
}

export default Login