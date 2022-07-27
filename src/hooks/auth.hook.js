import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(null)
  const [loginName, setLoginName] = useState(null)

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setLoginName(id)

    localStorage.setItem(storageName, JSON.stringify({
      loginName: id, token: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setLoginName(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.Token) {
      login(data.Token, data.userName)
    }
    setReady(false)
  }, [login])

  return { login, logout, token, loginName, ready }
}