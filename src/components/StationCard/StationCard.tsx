import { StyleSheet } from 'react-native'
import { Box, View, Text, Image, Stack, VStack, Divider } from 'native-base'

import { colors } from '../../constants/Colors'
import IconTextItem from '../ItemList/IconTextItem'
import StartIcon from '../../assets/icons/StartIcon'
import ClockIcon from '../../assets/icons/ClockIcon'
import LocationPinIcon from '../../assets/icons/LocationPinIcon'
import MakerDistanceIcon from '../../assets/icons/MakerDistanceIcon'

const StationCard = () => (
  <Box
    mt="16px"
    py="8px"
    borderRadius="md"
    style={{
      height: 150,
      borderRadius: 10,
      backgroundColor: colors.write,
    }}
  >
    <VStack space="4" divider={<Divider />}>
      <View flexDirection="row" px="4" pb="4">
        <Image
          alt="Plug Points"
          // eslint-disable-next-line global-require
          source={require('../../assets/images/plug-points.png')}
          style={{
            width: '25%',
            height: 120,
          }}
        />
        <Box width="75%">
          <Stack flexDirection="row" justifyContent="space-between">
            <Text style={styles.title}>Kalamandir [ Kukatpally ]</Text>

            <Box alignSelf="self-end">
              <LocationPinIcon />
            </Box>
          </Stack>

          <Text style={styles.resources}>3 Plugs . Wifi . Cafe . Restaurant</Text>
          <Stack flexDirection="row" justifyContent="space-between">
            <View>
              <IconTextItem icon={<MakerDistanceIcon />} text="4.8 KM" />

              <IconTextItem icon={<StartIcon />} text="4.5" />
            </View>

            {[1, 2, 3, 4].map(() => (
              <Box
                justifyContent="center"
                alignItems="center"
                style={{
                  rowGap: 4,
                }}
              >
                <Image
                  alt="Tesla Roadster"
                  // eslint-disable-next-line global-require
                  source={require('../../assets/images/tesla-roadster.png')}
                  style={{
                    width: 32,
                    height: 32,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Type 2
                </Text>
              </Box>
            ))}
          </Stack>

          <IconTextItem icon={<ClockIcon />} text="9:00AM to 12:00PM" />
        </Box>
      </View>
    </VStack>
  </Box>
)

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.70)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  resources: {
    color: 'rgba(0, 0, 0, 0.46)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
})
export default StationCard
