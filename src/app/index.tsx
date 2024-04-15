import { PaperProvider } from 'react-native-paper'
import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { App } from './app'
import Login from './login'
import { useTheme } from '../constants/Styles/'

const Stack = createNativeStackNavigator()

export default function index() {
  const selectedTheme = useTheme()

  return (
    <PaperProvider theme={selectedTheme}>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </PaperProvider>
  )
}

export const Layout = () => {
  const { authState, onLogout, onLogin } = useAuth()

  useEffect(() => {
    onLogout()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <Stack.Screen
            name="Scanne Screen"
            component={App}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
