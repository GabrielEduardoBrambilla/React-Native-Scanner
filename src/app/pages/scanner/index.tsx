import { StyleSheet, View, Button } from 'react-native'
import { Camera, CameraView } from 'expo-camera/next'
import React, { useEffect, useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { styles } from './styles'
import { useAuth } from '../../../context/AuthContext'

export function Scanner() {
  const [hasPermission, setHasPermission] = useState<Boolean>(false)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')
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
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getCameraPermissions()
  }, [])

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Pedindo acesso a camera</Text>
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso a camera</Text>
        <Button
          title="Permitir o uso da camera"
          onPress={() => {
            Camera.requestCameraPermissionsAsync()
          }}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr']
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {/* <Button
        title={'Scan again?'}
        onPress={() => setScanned(false)}
        color="tomato"
      /> */}

      <Text variant="headlineSmall">
        Professor: <Text variant="bodyMedium">Gustavo Colombeli</Text>
      </Text>
      <Text variant="headlineSmall">
        Dia: <Text variant="bodyMedium"> 15/04/2023</Text>
      </Text>
      <Text variant="headlineSmall">
        Presença: <Text variant="bodyMedium"> A confirmar</Text>
      </Text>
      {scanned && (
        <Button
          title={'Scan again?'}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
      <Button title={'Logout?'} onPress={onLogout} color="tomato" />
    </View>
  )
}
