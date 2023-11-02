import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type StartIconProps = {
  size?: number
}

const StartIcon = ({ size = 16 }: StartIconProps) => (
  <View>
    <Svg height={size} width={size} viewBox="0 0 9 8">
      <Path
        d="M5.6178 3.00967L5.73706 3.23901L5.99313 3.27432L7.89234 3.53615L6.53634 4.79024L6.33499 4.97646L6.38382 5.24633L6.70986 7.04862L4.96705 6.17941L4.74389 6.06812L4.52074 6.17941L2.77792 7.04862L3.10397 5.24633L3.15279 4.97646L2.95145 4.79024L1.59544 3.53615L3.49466 3.27432L3.75073 3.23901L3.86998 3.00967L4.74389 1.32904L5.6178 3.00967Z"
        fill="#FAB70C"
        fill-opacity="0.85"
        stroke="#F39404"
      />
    </Svg>
  </View>
)

export default StartIcon
