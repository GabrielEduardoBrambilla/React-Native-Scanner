import * as React from 'react'
import { AppRegistry } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'
import { expo as appName } from '../app.json'
import { ProgressBar, MD3Colors } from 'react-native-paper'

// import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <Text>teotjeo</Text>
      <ProgressBar progress={0.5} color={'#000'} />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName.name, () => Main)
