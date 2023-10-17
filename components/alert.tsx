import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { useLoggedInContext } from './authContext'

const Alert = () => {
  const { isLoggedIn, toggleLoggedIn} = useLoggedInContext();
  return (
    <div
      className={cn('border-b', 'bg-accent-1 border-accent-2')}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <span className='mr-2'>{!isLoggedIn && 'Not'} Logged In</span>
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded' 
            onClick={toggleLoggedIn}
          >
            Toggle Log In
          </button> 
        </div>
      </Container>
    </div>
  )
}

export default Alert
