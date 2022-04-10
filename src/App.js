import { useContext } from 'react'
import UserContext from './usersContext'

function App() {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <ul>
      {user.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  )
}

export default App
