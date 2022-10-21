import React from 'react';
import { useCookies } from 'react-cookie'

const USERNAME = 'james@complete.so'
const PASSWORD = 'complete'

type Props = {
  children: React.ReactElement
}

const PaywallHOC = ({ children }: Props) => {
  const [cookies] = useCookies(['auth-username', 'auth-password'])
  const isLoggedIn =
    cookies['auth-username'] === USERNAME &&
    cookies['auth-password'] === PASSWORD

  return React.cloneElement(children, { isLoggedIn })
}

export default PaywallHOC