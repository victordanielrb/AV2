import { createContext, useContext, useState } from 'react'
import { usuarios } from '../data/mock'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(usuario, senha) {
    const found = usuarios.find(u => u.usuario === usuario && u.senha === senha)
    if (found) {
      setUser(found)
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
