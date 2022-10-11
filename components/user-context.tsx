import { useContext, createContext, useState, FC } from 'react'

interface IUserContext {
  user: boolean
  disableUser?: () => void
  activateUser?: () => void
}

const defaultUser = {
  user: false,
}

export const UserContext = createContext<IUserContext>(defaultUser)

export const ContentProvider: FC = ({ children }) => {

  const [user, setUser] = useState(defaultUser.user)
  
  const activateUser = () => {
    setUser(true)
  }

  const disableUser = () => {
    setUser(false)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        disableUser,
        activateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}