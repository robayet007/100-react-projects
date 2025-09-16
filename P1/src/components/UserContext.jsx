import { useState, createContext } from 'react'

const personContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'robayet' })

  const updateUser = (newName) => {
    setUser({ name: newName })
  }

  return (
    <personContext.Provider value={{ user, updateUser }}>
      {children}
    </personContext.Provider>
  )
}

export { UserProvider, personContext }

