import { useRouter } from "next/router"

const LoginButton = ({localStorageObj} : {localStorageObj: null | Storage}) => {
  const loggedIn = localStorageObj ? localStorageObj.getItem('loggedIn') : false
  const router = useRouter()

  const onButtonClick = () => {
    if(!localStorageObj) return
    localStorageObj.setItem('loggedIn', 'loggedIn')
    router.reload()
  }

  const onLogout = () => {
    if(!localStorageObj) return
    localStorageObj.clear()
    router.push('/')
  }

  if(loggedIn){
    return <button style={{border: '1px solid gray'}} className='bg-gray rounded-md px-1 text-black' onClick={onLogout}>You're Logged In, click here to logout</button>
  }
  return <button style={{border: '1px solid gray'}} className='bg-gray rounded-md px-1 text-black' onClick={onButtonClick}>Log in</button>



}

export default LoginButton