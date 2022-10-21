import React, { useRef, useContext } from "react"
import { AuthContext } from "../auth/AuthContext"

const LoginForm = (props: any) => {
  const authContext = useContext(AuthContext)
  const { logIn } = authContext
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  function onSubmit(event: any) {
    event.preventDefault()
    if (emailRef.current != null && passwordRef.current != null) {
      logIn?.({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    }
  }
  return (
    <div className="flex items-center w-full">
      <form
        className="py-8 px-8 w-full rounded-md border-2 shadow"
        onSubmit={onSubmit}
      >
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          className="block py-3 px-3 bg-white w-full text-gray-900 text-lg mr-2 mb-2 flex-shrink flex-grow rounded-md border-2 shadow"
          ref={emailRef}
          defaultValue={"eric.suzuki@complete.so"}
          type="email"
          id="email"
          autoFocus
        />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          className="block py-3 px-3 bg-white w-full text-gray-900 text-lg mr-2 mb-2 flex-shrink flex-grow rounded-md border-2 shadow"
          ref={passwordRef}
          defaultValue="abcde12345"
          type="password"
          id="password"
          autoFocus
        />
        <button
          className="block py-1 px-6 bg-white text-gray-900 text-lg mr-2 mt-4 flex-shrink flex-grow rounded-xl border-2 shadow"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default LoginForm
