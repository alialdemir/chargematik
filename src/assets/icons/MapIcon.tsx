import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type MapIconProps = {
  size: number
  color?: string
}

const MapIcon = ({ size = 100, color }: MapIconProps) => (
    <View>
      <Svg height={size} width={size}>
        <Path
          d="M16.0013 6.39386L8.98425 1.90509L1.56238 7.03204V23.4383L8.99841 18.6077L16.0155 23.0965L23.4374 17.9695V1.56329L16.0013 6.39386ZM15.2343 20.5574L9.7655 17.0418V4.44415L15.2343 7.95978V20.5574Z"
          fill={color}
        />
      </Svg>
    </View>
  )

export default MapIcon
