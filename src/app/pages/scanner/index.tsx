import { StyleSheet, View, Button } from 'react-native'
import { Camera, CameraView } from 'expo-camera'
import React, { useEffect, useState } from 'react'
import { TextInput, Text, useTheme } from 'react-native-paper'
import { Barcodebox, Container, Maintext } from './styles'
import { useAuth } from '../../../context/AuthContext'

export function Scanner() {
  const [hasPermission, setHasPermission] = useState<Boolean>(false)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')
  const theme = useTheme()
  const { onLogout } = useAuth()

  const handleBarCodeScanned = ({
    type,
    data
  }: {
    type: string
    data: string
  }) => {
    setText(data)
    setScanned(true)

    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  // Pede permisão para acessar a camera quando o app carrega
  // useEffect(() => {
  //   const getCameraPermissions = async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync()
  //     setHasPermission(status === 'granted' ? true : false)
  //   }

  //   getCameraPermissions()
  // }, [])

  // if (hasPermission === null) {
  //   return (
  //     <Container>
  //       <Text style={{ margin: 10 }}>Pedindo acesso a camera</Text>
  //     </Container>
  //   )
  // }
  // if (hasPermission === false) {
  //   return (
  //     <Container>
  //       <Text style={{ margin: 10 }}>Sem acesso a camera</Text>
  //       <Button
  //         title="Permitir o uso da camera"
  //         onPress={async () => {
  //           const { status } = await Camera.requestCameraPermissionsAsync()
  //           setHasPermission(status === 'granted' ? true : false)
  //         }}
  //       />
  //     </Container>
  //   )
  // }

  return (
    <Container
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: 750,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background
      }}
    >
      <Barcodebox>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr']
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </Barcodebox>
      <Maintext>
        <Text>{text}</Text>
      </Maintext>

      <View>
        <Text variant="headlineSmall">Professor: Gustavo Colombeli</Text>
        <Text variant="headlineSmall">Dia: 15/04/2023</Text>
        <Text variant="headlineSmall">Presença: A confirmar</Text>
      </View>
      {scanned && (
        <Button
          title={'Scan again?'}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
      <Button title={'Logout ?'} onPress={onLogout} color="tomato" />
    </Container>
  )
}
