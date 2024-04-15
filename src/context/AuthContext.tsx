import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../service/api'
// import axios from 'axios'
// import * as SecureStore from 'expo-secure-store'

interface AuthProviderProps {
  children: ReactNode // Define children prop as ReactNode
}

interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null }
  onLogin: (ra: string, password: string) => Promise<any>
  onLogout: () => Promise<any>
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{
    token: string | null
    authenticated: boolean | null
  }>({
    token: null,
    authenticated: null
  })

  const onLogin = async (ra: string, password: string) => {
    try {
      const response = await api.get(`auth?ra=${ra}&password=${password}`)
      alert(response)
      console.log(response)

      response
        ? setAuthState({ token: 'logged in', authenticated: true })
        : setAuthState({ token: '', authenticated: false })

      setAuthState({ token: 'logged in', authenticated: true })
    } catch (e) {
      alert('Error')
      return { error: true, msg: 'Deu ruim' }
    }
  }

  const onLogout = async () => {
    try {
      setAuthState({ token: null, authenticated: false })
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg }
    }
  }

  return (
    <AuthContext.Provider value={{ onLogin, onLogout, authState }}>
      {children}
    </AuthContext.Provider>
  )
}
