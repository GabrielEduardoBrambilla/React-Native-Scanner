import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const response = [
  { ra: 123458, password: 123123, studentName: 'John' },
  { ra: 234567, password: 123123, studentName: 'Jane' },
  { ra: 345678, password: 123123, studentName: 'Alice' },
  { ra: 456789, password: 123123, studentName: 'Bob' },
  { ra: 567890, password: 123123, studentName: 'Michael' },
  { ra: 678901, password: 123123, studentName: 'Emily' },
  { ra: 789012, password: 123123, studentName: 'David' },
  { ra: 890123, password: 123123, studentName: 'Sarah' },
  { ra: 901234, password: 123123, studentName: 'Sophia' },
  { ra: 112345, password: 123123, studentName: 'Matthew' },
  { ra: 223456, password: 123123, studentName: 'Olivia' },
  { ra: 334567, password: 123123, studentName: 'Daniel' },
  { ra: 445678, password: 123123, studentName: 'Emma' },
  { ra: 556789, password: 123123, studentName: 'James' },
  { ra: 667890, password: 123123, studentName: 'Ava' },
  { ra: 778901, password: 123123, studentName: 'Liam' },
  { ra: 889012, password: 123123, studentName: 'Charlotte' },
  { ra: 990123, password: 123123, studentName: 'Benjamin' },
  { ra: 123049, password: 123123, studentName: 'Mia' },
  { ra: 230984, password: 123123, studentName: 'Elijah' },
  { ra: 340928, password: 123123, studentName: 'Amelia' },
  { ra: 450982, password: 123123, studentName: 'William' },
  { ra: 560927, password: 123123, studentName: 'Harper' },
  { ra: 670921, password: 123123, studentName: 'Alexander' },
  { ra: 780916, password: 123123, studentName: 'Evelyn' },
  { ra: 890110, password: 123123, studentName: 'Daniel' },
  { ra: 990112, password: 123123, studentName: 'Sofia' },
  { ra: 112345, password: 123123, studentName: 'Logan' },
  { ra: 221349, password: 123123, studentName: 'Avery' },
  { ra: 334478, password: 123123, studentName: 'Sebastian' }
]

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null }
  onLogin?: (ra: string, password: string) => Promise<any>
  onLogout?: () => Promise<any>
}

const TOKEN_KEY = 'my-jwt'
export const API_URL = 'https://api.developbetterapps.com'
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null
    authenticated: boolean | null
  }>({
    token: null,
    authenticated: null
  })

  const onLogin = async (ra: string, password: string) => {
    try {
      // Requisição API Uniamerica para authenticação do usuario
      // const result = await axios.post(`${API_URL}/auth`, { ra, password })

      const studentExist = response.map(student => {
        return student.ra.toString() === ra &&
          student.password.toString() === password
          ? true
          : false
      })

      studentExist
        ? setAuthState({ token: 'logged in', authenticated: true })
        : setAuthState({ token: '', authenticated: false })
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg }
    }
  }
  const onLogout = async () => {
    try {
      // Requisição API Uniamerica para authenticação do usuario
      // const result = await axios.post(`${API_URL}/auth`, { ra, password })
      setAuthState({ token: null, authenticated: false })
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg }
    }
  }

  const value = {
    onLogin,
    onLogout,
    authState
  }

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>
}
