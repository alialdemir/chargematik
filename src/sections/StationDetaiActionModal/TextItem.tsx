import { View, Text, Image, StyleSheet } from 'react-native'

import { useThemeColor } from '../../components/Themed'

export type TextItemType = {
  label: string
  description: string
  descriptionColor?: string
  isShowImage?: boolean
}

const TextItem = ({ label, description, isShowImage = false, descriptionColor }: TextItemType) => {
  const colors = useThemeColor()

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.stationDetailLabelText,
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
          color: descriptionColor ?? colors.stationDetailDescriptionText,
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
}

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
