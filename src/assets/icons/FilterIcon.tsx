import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type FilterIconProps = {
  size?: number
  color?: string
}

const FilterIcon = ({ size = 16, color = '#ffffff' }: FilterIconProps) => (
  <View>
    <Svg height={size} width={size} viewBox="0 0 15 13">
      <Path
        d="M13.6626 0.508728H1.33781C0.927649 0.508728 0.671511 0.955715 0.877426 1.3123L4.7714 7.93172V11.9596C4.7714 12.2559 5.00912 12.4953 5.30377 12.4953H9.69662C9.99127 12.4953 10.229 12.2559 10.229 11.9596V7.93172L14.1246 1.3123C14.3289 0.955715 14.0727 0.508728 13.6626 0.508728ZM9.03033 11.29H5.97006V8.67837H9.032V11.29H9.03033ZM9.19104 7.32904L9.032 7.60694H5.96839L5.80935 7.32904L2.48959 1.71409H12.5108L9.19104 7.32904Z"
        fill={color}
      />
    </Svg>
  </View>
)

export default FilterIcon
