import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
export const Maintext = styled(View)`
  font-size: 16;
  margin: 20;
`
export const Barcodebox = styled(View)`
  align-items: center;
  height: 300;
  width: 300;
  overflow: hidden;
  border-radius: 30;
  background-color: ${props => props.theme.backgroundColor};
`
export const TextStyled = styled(Text)``
export const Container = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 750;
  align-items: center;
  justify-content: center;
`
