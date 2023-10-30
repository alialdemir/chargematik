import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type ThunderboltIconProps = {
  size?: number
}

const ThunderboltIcon = ({ size = 25 }: ThunderboltIconProps) => (
    <View>
      <Svg height={size} width={size}>
        <Path
          d="M16.7033 6.77197H11.3249L16.1613 0.661133C16.2614 0.531738 16.1711 0.34375 16.0075 0.34375H6.64471C6.57635 0.34375 6.51043 0.380371 6.47625 0.441406L0.150566 11.3667C0.0748822 11.4961 0.167656 11.6597 0.319023 11.6597H4.57683L2.39422 20.3901C2.34783 20.5806 2.57732 20.7148 2.71893 20.5781L16.8376 7.10644C16.9645 6.98682 16.8791 6.77197 16.7033 6.77197Z"
          fill="#F39404"
        />
      </Svg>
    </View>
  )

export default ThunderboltIcon
