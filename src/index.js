import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UsersProvider } from './usersContext'

const root = createRoot(document.getElementById('root'))

root.render(
  <UsersProvider>
    <App />
  </UsersProvider>
)
