import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { App } from './app'
import Login from './login'
import { Button } from 'react-native-paper'

const Stack = createNativeStackNavigator()

export default function index() {
  return (
    // <AuthProvider>
    <Layout />
    // </AuthProvider>
  )
}

export const Layout = () => {
  const { authState, onLogout } = useAuth()
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* {authState?.authenticated ? ( */}
        {true ? (
          <Stack.Screen
            name="Scanner Screen"
            component={App}
            options={{
              autoHideHomeIndicator: true,
              headerRight: () => (
                <Button onPress={onLogout}>
                  <Text>Login</Text>
                </Button>
              )
            }}
          />
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
