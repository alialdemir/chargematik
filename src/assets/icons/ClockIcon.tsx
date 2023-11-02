import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type ClockIconProps = {
  size?: number
  color?: string
}

const ClockIcon = ({ size = 16, color = '#545454' }: ClockIconProps) => (
  <View>
    <Svg height={size} width={size} viewBox="0 0 8 7">
      <Path
        d="M4 0.4375C2.06719 0.4375 0.5 1.80879 0.5 3.5C0.5 5.19121 2.06719 6.5625 4 6.5625C5.93281 6.5625 7.5 5.19121 7.5 3.5C7.5 1.80879 5.93281 0.4375 4 0.4375ZM5.37891 4.44131L5.15547 4.70791C5.15061 4.71372 5.14449 4.71862 5.13745 4.72235C5.13042 4.72608 5.12261 4.72855 5.11448 4.72963C5.10635 4.73071 5.09805 4.73038 5.09007 4.72864C5.08209 4.72691 5.07458 4.72381 5.06797 4.71953L3.77578 3.89512C3.76773 3.89006 3.76119 3.88338 3.7567 3.87565C3.75221 3.86792 3.74992 3.85936 3.75 3.85068V1.96875C3.75 1.93867 3.77812 1.91406 3.8125 1.91406H4.18828C4.22266 1.91406 4.25078 1.93867 4.25078 1.96875V3.66064L5.36484 4.36543C5.39297 4.38252 5.39922 4.4167 5.37891 4.44131Z"
        fill={color}
      />
    </Svg>
  </View>
)

export default ClockIcon
