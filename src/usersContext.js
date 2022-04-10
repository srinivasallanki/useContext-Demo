import { createContext, useState, useId } from 'react'
import Users from './users.json'

const UserContext = createContext()

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(Users)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
