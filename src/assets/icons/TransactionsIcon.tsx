import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type TransactionsIconProps = {
  size: number
  color?: string
}

const TransactionsIcon = ({ size = 100, color }: TransactionsIconProps) => (
    <View>
      <Svg height={size} width={size}>
        <Path
          d="M22.6562 3.90625H2.34375C1.91162 3.90625 1.5625 4.25537 1.5625 4.6875V8.59375H23.4375V4.6875C23.4375 4.25537 23.0884 3.90625 22.6562 3.90625ZM1.5625 20.3125C1.5625 20.7446 1.91162 21.0938 2.34375 21.0938H22.6562C23.0884 21.0938 23.4375 20.7446 23.4375 20.3125V10.7422H1.5625V20.3125ZM15.6982 15.8203C15.6982 15.7129 15.7861 15.625 15.8936 15.625H19.9219C20.0293 15.625 20.1172 15.7129 20.1172 15.8203V17.5781C20.1172 17.6855 20.0293 17.7734 19.9219 17.7734H15.8936C15.7861 17.7734 15.6982 17.6855 15.6982 17.5781V15.8203Z"
          fill={color}
        />
      </Svg>
    </View>
  )

export default TransactionsIcon
