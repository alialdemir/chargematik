import { StyleSheet } from 'react-native'
import { Text, View, HStack, Switch, useColorMode, Button } from 'native-base'

const TabStationsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>station</Text>

    <ToggleDarkMode />
  </View>
)

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'}
      />
      <Text>Light</Text>
<Button>
  sdasad
</Button>
      <Text style={{color:'red'}}>{colorMode}</Text>
    </HStack>
  )
}

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

export default TabStationsScreen
