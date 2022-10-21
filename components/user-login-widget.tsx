import React, { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"
import Link from "next/link"

export default function UserLoginWidget(props: any) {
  const authContext = useContext(AuthContext)
  const isLoggedIn = authContext.state?.isLoggedIn
  const loginDetails = authContext.state?.loginDetails
  const { logOut } = authContext
  return (
    <div className="flex items-end justify-end text-right">
      {isLoggedIn ? (
        <div>
          <span>{loginDetails?.email}</span>
          <div
            className="ml-4 inline-block cursor-pointer border-2 rounded-md py-1 px-2 bg-black text-white w-16 text-center"
            onClick={() => logOut?.()}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className="border-2 rounded-md py-1 px-2 bg-black text-white w-16 text-center">
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  )
}
