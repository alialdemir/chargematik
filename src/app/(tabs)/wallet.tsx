import { View, Text, StyleSheet } from 'react-native'

const TabWalletScreen = () => (
  <View style={styles.container}>
    <Text>Wallet</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

export default TabWalletScreen
