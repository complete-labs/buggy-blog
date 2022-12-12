import markdownStyles from './markdown-styles.module.css'
import CSS from 'csstype';
import React from 'react'
import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { useRouter } from 'next/router'
import { credentials } from '../lib/credentials';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';

const login_styles: CSS.Properties = {
  zIndex: 1000
};

const overlay_styles: CSS.Properties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: 'blur(5px)',
  zIndex: 1000
}

const h3_styles: CSS.Properties = {
  marginTop: '3px'
}

type Props = {
  setView: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({setView}: Props) => {
  const router = useRouter()
  const [wrongPass, setWrongPass] = useState(false)
  const [inputs, setInputs] = useState({'email': '', 'password': ''});

  const onClose = () => {
    router.push('/')
  }

  const attemptLogin = () => {
    if (inputs['email'] in credentials && credentials[inputs['email']] === inputs['password']) {
      const cookieOptions = {
        expires: new Date(new Date().setDate(new Date().getDate() + 7))
      }
      setCookie('user', inputs['email'], cookieOptions)
      setView(true)
    } else {
      setWrongPass(true)
    }
  }

  return (
    <>
      <div style={overlay_styles}></div>
      <React.Fragment>
        <Modal
          show={true}
          size="md"
          style={login_styles}
          onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <h3 style={h3_styles} className="text-xs font-small text-gray-900 dark:text-white">
                To view premium content
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email"
                  required={true}
                  onChange={(e) =>
                    setInputs((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    value="Your password"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required={true}
                  helperText={wrongPass && <React.Fragment><span className="font-medium">Incorrect username or password</span></React.Fragment>}
                  onChange={(e) =>
                    setInputs((prev) => {
                      return { ...prev, password: e.target.value };
                    })
                  }
                />
              </div>
              <div className="w-full">
                <Button onClick={attemptLogin}>
                  Log in to your account
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
    
  )
}

export default Login