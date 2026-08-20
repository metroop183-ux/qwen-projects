import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const navigate = useNavigate()

  const login = (email, password) => {
    const mockUser = { id: '1', email, name: email.split('@')[0], kycApproved: false, balance: 17500 }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    navigate('/dashboard')
  }

  const signup = (email, password) => {
    const mockUser = { id: '1', email, name: email.split('@')[0], kycApproved: false, balance: 0 }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    navigate('/dashboard')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  const updateBalance = (amount) => {
    const updated = { ...user, balance: user.balance + amount }
    setUser(updated)
    localStorage.setItem('user', JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateBalance, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
