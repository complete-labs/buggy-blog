import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

interface ILoginDetails {
  email: string
  name: string
  uuid: string
  isPremiumMember: boolean | null
}

interface IAuthContext {
  state?: {
    isLoggedIn: boolean
    loginDetails: ILoginDetails
  }
  logIn?: Function
  logOut?: Function
  checkValidLogin?: Function
  setLoginDetails?: Function
}

interface ILoginInput {
  email: string
  password: string
}
type Props = {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = React.createContext<IAuthContext>({})

export default function AuthProvider(props: Props): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [loginDetails, setLoginDetails] = useState<ILoginDetails>({
    email: "",
    name: "",
    uuid: "",
    isPremiumMember: null,
  })
  const now = new Date()
  let router = useRouter()
  function redirect() {
    router.push("/")
  }

  const logIn = (ILoginInput: ILoginInput): void => {
    console.log("API call for login using the details:")
    console.log("Email: " + ILoginInput.email)
    console.log("Password: " + ILoginInput.password)
    // response from server gets data encoded in JWT
    const loginCookie = {
      value: "JWT-token-mockup-eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik",
      expiry: now.getTime() + 86400000,
    }
    setIsLoggedIn(true)
    // DECODED JWT DATA
    setLoginDetails({
      email: "eric.suzuki@complete.so",
      name: "Eric Suzuki",
      uuid: "47ac6eb7-bc7b-4414-8445-71aab71fd6c4",
      isPremiumMember: true,
    })
    localStorage.setItem("loginToken", JSON.stringify(loginCookie))
    redirect()
  }

  const logOut = (): void => {
    console.log("API call for logout")
    localStorage.removeItem("loginToken")
    setIsLoggedIn(false)
    setLoginDetails({
      email: "",
      name: "",
      uuid: "",
      isPremiumMember: null,
    })
  }

  const checkValidLogin = () => {
    if (!localStorage.getItem("loginToken")) {
      setIsLoggedIn(false)
      return false
    } else if (
      now.getTime() >
      JSON.parse(localStorage.getItem("loginToken") || "{}").expiry
    ) {
      logOut()
      return false
    } else {
      setIsLoggedIn(true)
      // DECODED JWT LOGIN DETAILS
      setLoginDetails({
        email: "eric.suzuki@complete.so",
        name: "Eric Suzuki",
        uuid: "47ac6eb7-bc7b-4414-8445-71aab71fd6c4",
        isPremiumMember: true,
      })
      return true
    }
  }

  useEffect(() => {
    checkValidLogin()
  })

  const providerValues: IAuthContext = {
    state: {
      isLoggedIn: isLoggedIn,
      loginDetails: loginDetails,
    },
    logIn: logIn,
    logOut: logOut,
    checkValidLogin: checkValidLogin,
    setLoginDetails: setLoginDetails,
  }

  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  )
}
