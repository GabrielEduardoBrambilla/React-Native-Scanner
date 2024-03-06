import * as React from 'react'
import { AppRegistry } from 'react-native'
import {
  MD2LightTheme,
  MD3LightTheme,
  PaperProvider,
  Text
} from 'react-native-paper'
import { expo as appName } from '../app.json'
import { App } from './app'
import { Login } from './login'
import { theme as Theme } from '@/constants/Theme'

export default function Main() {
  return (
    <PaperProvider theme={Theme}>
      <Login />
      {/* <App /> */}
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName.name, () => Main)
