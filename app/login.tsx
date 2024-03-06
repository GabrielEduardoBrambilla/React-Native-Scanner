import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import { COLORS } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export function Login() {
  const [text, setText] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          mode="flat"
          label="RA"
          keyboardType="numeric"
          maxLength={6}
          value={text}
          onChangeText={text => setText(text)}
          style={styles.round}
        />
        <TextInput
          mode="flat"
          label="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.round}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}
        >
          Fazer login
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 750,
    backgroundColor: COLORS.blue[200],
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    width: 250,
    gap: 8
  },
  round: {
    borderRadius: 6
  },
  button: {
    marginTop: 8
  }
})
