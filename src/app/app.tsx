import { StyleSheet, Text, View, Button } from 'react-native'
import { Camera, CameraView } from 'expo-camera/next'
import React, { useEffect, useState } from 'react'
import { theme as Theme } from '../constants/Theme'
import { COLORS } from '../constants/Colors'

export function App() {
  const [hasPermission, setHasPermission] = useState<Boolean>(false)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')

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

      {scanned && (
        <Button
          title={'Scan again?'}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
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
  maintext: {
    fontSize: 16,
    margin: 20
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
})
