import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
const UserContext = createContext(null)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (details) => {
    try {
      const response = await axios.post('http://localhost:3000/api/philatelist/login', details, {withCredentials: true})
      console.log(response)
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
