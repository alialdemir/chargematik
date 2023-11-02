import { View, Text, StyleSheet } from 'react-native'

import { ToggleDarkMode } from '../../sections/ToggleDarkMode'

const TabTransactionsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>transactions</Text>
    <ToggleDarkMode />
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

export default TabTransactionsScreen
