import PropTypes from 'prop-types'
import { useState, useMemo } from 'react'

import isEmpty from '../helpers/isEmpty'
import AuthContext from '../contexts/AuthContext'
import { userLocalStorageKey } from '../config.js'

const AuthProvider = ({ children }) => {
  const savedUser = JSON.parse(window.localStorage.getItem(userLocalStorageKey)) || {}
  const [currentUser, setUser] = useState(savedUser)

  const setUserHandler = (user = {}) => {
    if (isEmpty(user)) return

    window.localStorage.setItem(userLocalStorageKey, JSON.stringify(user))
    return setUser(user)
  }

  const logoutHandler = () => {
    window.localStorage.removeItem(userLocalStorageKey)
    return setUser(null)
  }

  const authValue = useMemo(() => ({
    user: currentUser?.user || null,
    token: currentUser?.token,
    isAuthenticated: !!currentUser?.user?.id,
    setUser: setUserHandler,
    logout: logoutHandler
  }), [currentUser])

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider
