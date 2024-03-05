import * as React from 'react'
import { AppRegistry } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'
import { expo as appName } from '../app.json'
import { App } from './app'
// import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName.name, () => Main)
