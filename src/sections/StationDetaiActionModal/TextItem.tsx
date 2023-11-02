import { StyleSheet } from 'react-native'
import { View, Text, Image, useColorModeValue } from 'native-base'

import { colors } from '../../constants/Colors'

export type TextItemType = {
  label: string
  description: string
  descriptionColor?: string
  isShowImage?: boolean
}

const TextItem = ({ label, description, isShowImage = false, descriptionColor }: TextItemType) => (
  <View style={styles.container}>
    <Text
      style={{
        color: useColorModeValue(colors.primary, colors.write),
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'baseline',
        width: 80,
        textAlign: 'right',
      }}
    >
      {label} :{'   '}
    </Text>
    <Text
      style={{
        color: useColorModeValue(
          descriptionColor ?? colors.black,
          descriptionColor ?? colors.textColor
        ),
        fontSize: 12,
        fontWeight: '500',
      }}
    >
      {description}
    </Text>
    {isShowImage ? (
      <Image
        // eslint-disable-next-line global-require
        source={require('../../assets/images/plug-points.png')}
        style={{
          width: 138,
          height: 165,
          marginTop: -70,
        }}
      />
    ) : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 58,
    marginBottom: 17,
    gap: 14,
  },
})
export default TextItem
