import {
  MD3LightTheme as DefaultTheme,
  MD3LightTheme,
  PaperProvider
} from 'react-native-paper'

export const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 5,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3'
  }
}
