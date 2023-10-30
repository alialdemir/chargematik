import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useColorModeValue } from 'native-base'

import { colors } from '../../constants/Colors'

type BackArrowIconProps = {
  size?: number
  color?: string
}

const BackArrowIcon = ({ size = 100, color }: BackArrowIconProps) => (
  <View>
    <Svg width="52" height="52" viewBox="0 0 32 32" fill="none">
      <Path
        d="M11.9141 16.4081L4.88281 10.5018L11.9141 4.59558M5.85937 10.5018H20.1172"
        stroke={useColorModeValue(colors.gray40, colors.write)}
        stroke-width="2.25"
        stroke-miterlimit="10"
        stroke-linecap="square"
      />
    </Svg>
  </View>
)

export default BackArrowIcon
