import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
  token: null,
  loginName: null,
  login: noop,
  logout: noop,
  isAuthenticated: true
})