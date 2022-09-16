import { createContext, useState, useCallback, useMemo, useContext } from "react";


const MY_AUTH_APP = 'MY_AUTH_APP_1'
const ROL = 'ROL'
const USERNAME = 'USERNAME'

// Objeto con el provider
export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  // Obtenemos la sesion del usuario almacenada en Local Storage
  const [isAuthenticated, setIsAuthenticated] = useState(typeof window !== 'undefined' && window.localStorage.getItem(MY_AUTH_APP))
  const [userRol, setUserRol] = useState(typeof window !== 'undefined' && window.localStorage.getItem(ROL))
  const [userName, setUsername] = useState(typeof window !== 'undefined' && window.localStorage.getItem(USERNAME))

  const login = useCallback(function(){
    typeof window !== 'undefined' && window.localStorage.setItem(MY_AUTH_APP, 'true')
    setIsAuthenticated(true)
  }, [])

  const saveInfo = useCallback(function(user_rol, username){
    window.localStorage.setItem(ROL, user_rol)
    setUserRol(user_rol)
    window.localStorage.setItem(USERNAME, username)
    setUsername(username)
  }, [])

  const logout = useCallback(function(){
    window.localStorage.removeItem(MY_AUTH_APP)
    window.localStorage.removeItem(ROL)
    window.localStorage.removeItem(USERNAME)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(()=>({
    login,
    logout,
    saveInfo,
    isAuthenticated,
    userRol,
    userName
  }), [login, logout, isAuthenticated, saveInfo, userRol, userName])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}