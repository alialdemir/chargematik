import { useColorScheme } from 'react-native'

import Colors, { colors } from '../constants/Colors'

export function useThemeColor(color = '') {
  const theme = useColorScheme() ?? 'light'

  if (color !== '') {
    return colors[color]
  }

  return Colors[theme]
}
