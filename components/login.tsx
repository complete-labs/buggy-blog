import { useState } from 'react'
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next'
import { authorizeService } from '../utils/authorize-service'
import { SESSION_COOKIE_NAME } from '../lib/constants'
import LoginModal from './login-modal'


const Login = () => {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const loggedIn = authorizeService()

  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)
  const logout = () => {
    deleteCookie(SESSION_COOKIE_NAME)
    router.reload()
  }

  if (loggedIn) {
    return (
      <div className="text-yellow-500 cursor-pointer">
        <h3 onClick={logout}>Sign Out</h3>
      </div>
    )
  }

  return (
    <>
      <div className="text-yellow-500 cursor-pointer">
        <h3 onClick={showModal}>Sign In</h3>
      </div>
      {modalVisible && <LoginModal title="Sign In" onLogin={hideModal} onClose={hideModal} />}
    </>
  )
}

export default Login
