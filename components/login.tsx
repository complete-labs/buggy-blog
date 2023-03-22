import { useRouter } from "next/router"

const LoginButton = () => {
  const loggedIn = localStorage.getItem('loggedIn')
  const router = useRouter()

  const onButtonClick = () => {
    localStorage.setItem('loggedIn', 'loggedIn')
    router.reload()
  }

  const onLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  if(loggedIn){
    return <button style={{border: '1px solid gray'}} className='bg-gray rounded-md px-1 text-black' onClick={onLogout}>You're Logged In, click here to logout</button>
  }
  return <button style={{border: '1px solid gray'}} className='bg-gray rounded-md px-1 text-black' onClick={onButtonClick}>Log in</button>



}

export default LoginButton