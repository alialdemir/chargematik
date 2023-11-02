import { View, StyleSheet, Dimensions } from 'react-native'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
// eslint-disable-next-line import/no-named-default
import { default as MapViewClustering } from 'react-native-map-clustering'

import { MapCustomStyles } from './styles'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.10456
const LONGITUDE = 27.31662
const LATITUDE_DELTA = 0.0122
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

type MapViewProps = {
  setSelectedCoordinate: any
}
const MapView = ({ setSelectedCoordinate }: MapViewProps) => {
  const handleMarkerPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate

    setSelectedCoordinate({ latitude, longitude })
  }

  return (
    <View style={styles.container}>
      <MapViewClustering
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={MapCustomStyles}
      >
        {new Array(55).fill(55).map((x, i) => (
          <Marker
            onPress={handleMarkerPress}
            key={i}
            coordinate={{
              latitude: LATITUDE + (Math.random() - 0.5) * LATITUDE_DELTA,
              longitude: LONGITUDE + (Math.random() - 0.5) * LONGITUDE_DELTA,
            }}
          />
        ))}
      </MapViewClustering>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
})

export default MapView
