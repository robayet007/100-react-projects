import React from 'react'
import UserProfile from './components/UserProfile'
import { UserProvider } from './components/UserContext'
import UserUpadate from './components/UserUpadate'

const App = () => {
  return (
   <UserProvider>
    <UserProfile/>
    <UserUpadate/>
   </UserProvider>
  )
}

export default App