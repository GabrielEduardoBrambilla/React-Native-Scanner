import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Formik, FormikProps } from 'formik'
import * as yup from 'yup'
import { useAuth } from '../../../context/AuthContext'
import { styles } from './styles'

interface FormFields {
  ra: string
  password: string
}

const formValidationSchema = yup.object({
  ra: yup.number().required(),
  password: yup.string().required()
})

export default function Login() {
  const { onLogin } = useAuth()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Formik
          initialValues={{ ra: '', password: '' }}
          validationSchema={formValidationSchema}
          onSubmit={(val, actions) => {
            onLogin(val.ra, val.password)
            actions.resetForm()
          }}
        >
          {(props: FormikProps<FormFields>) => (
            <View style={styles.form}>
              <TextInput
                mode="flat"
                label="RA"
                keyboardType="numeric"
                maxLength={6}
                value={props.values.ra.toString()}
                onChangeText={props.handleChange('ra')}
                style={styles.round}
              />
              <TextInput
                mode="flat"
                label="Senha"
                value={props.values.password}
                secureTextEntry
                onChangeText={props.handleChange('password')}
                style={styles.round}
              />
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => props.handleSubmit()}
              >
                <Text>Fazer login</Text>
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}
