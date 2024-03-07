import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { App } from './screen/app'
import Login from './screen/login'
import { Button } from 'react-native-paper'

const Stack = createNativeStackNavigator()

export default function index() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}

export const Layout = () => {
  const { authState, onLogout } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="app"
            component={App}
            options={{
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
