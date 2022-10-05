import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import React, { useState } from 'react';

import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const [username, setUserName] = useState();
const [password, setPassword] = useState();
const [] = useState();

const handleSubmit = async e => {
    e.preventDefault();
    if (username === 'user' && password === 'pass'){
        setToken(token);
    } 
}

const Login = ({ allPosts }: Props) => {
  return (
    <>
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>username onChange={e => setUserName(e.target.value)} </label>
            <input
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password onChange={e => setPassword(e.target.value)} </label>
            <input
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
        </form>
        </div>
    </>
  )
}

export default Login