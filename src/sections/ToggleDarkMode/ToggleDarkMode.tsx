import { Text, HStack, Switch, useColorMode } from 'native-base'

const ToggleDarkMode = () => {
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

      <Text style={{ color: 'red' }}>{colorMode}</Text>
    </HStack>
  )
}

export default ToggleDarkMode
