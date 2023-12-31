import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type StationsIconProps = {
  size: number
  color?: string
}

const StationsIcon = ({ size = 100, color }: StationsIconProps) => (
    <View>
      <Svg height={size} width={size}>
        <Path
          d="M20.7033 8.77197H15.3249L20.1613 2.66113C20.2614 2.53174 20.1711 2.34375 20.0075 2.34375H10.6447C10.5763 2.34375 10.5104 2.38037 10.4762 2.44141L4.15057 13.3667C4.07488 13.4961 4.16766 13.6597 4.31902 13.6597H8.57683L6.39422 22.3901C6.34783 22.5806 6.57732 22.7148 6.71892 22.5781L20.8376 9.10644C20.9645 8.98682 20.8791 8.77197 20.7033 8.77197Z"
          fill={color}
        />
      </Svg>
    </View>
  )

export default StationsIcon
