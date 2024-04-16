import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 750,
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
  },
  text: {
    display: 'flex',
    alignItems: 'center'
  }
})
