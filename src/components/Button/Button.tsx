import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useThemeColor } from '../Themed'

type ButtonProps = {
  text: string
  onPress: any
  backgroundColor?: string | 'danger' | 'primary'
  width?: number | string
}

const Button = ({ text, backgroundColor = 'primary', width = '100%', onPress }: ButtonProps) => (
  <TouchableOpacity
    style={{
      ...styles.button,
      width,
      backgroundColor: useThemeColor(backgroundColor),
    }}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.7,
  },
})

export default Button
