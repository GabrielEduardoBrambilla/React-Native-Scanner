import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { App } from './app'
import Login from './login'
import { Button } from 'react-native-paper'

const Stack = createNativeStackNavigator()

export default function index() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export const Layout = () => {
  const { authState, onLogout, onLogin } = useAuth()

  useEffect(() => {
    onLogout()
  }, [])

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="Scanne Screen"
            component={App}
            // options={{
            //   autoHideHomeIndicator: true,
            //   headerRight: () => (
            //     <Button onPress={onLogout}>
            //       <Text>Logout</Text>
            //     </Button>
            //   )
            // }}
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
