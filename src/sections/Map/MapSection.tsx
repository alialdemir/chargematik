import { useState } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'

import MapView from '../../components/MapView'
import SearchInput from '../../components/SearchInput'
import AppContextProvider from '../../contexts/AppContext'
import { NavigationActionModal } from '../NavigationActionModal'
import StationDetailActionModal from '../StationDetaiActionModal'

const MapSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isNavigationActionSheetOpen, setIsNavigationActionSheetOpen] = useState(false)
  // const { coordinate, setCoordinate } = useContext(AppContext)
  const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 })

  const handleToggleModal = (coor: any) => {
    setCoordinate(coor)
    setIsModalVisible(!isModalVisible)
  }

  const handleToggleNavigationModal = () => {
    setIsNavigationActionSheetOpen(true)
  }
  const handleCloseNavigationModal = () => {
    setIsNavigationActionSheetOpen(false)
  }

  return (
    <AppContextProvider value={{ coordinate, setCoordinate }}>
      <View style={styles.container}>
        <View style={styles.searchInputContainer}>
          <SearchInput />
          <Text>{JSON.stringify(coordinate)}</Text>
        </View>

        <MapView onStationDetailActionModal={handleToggleModal} />

        <StationDetailActionModal
          isVisible={isModalVisible}
          onToggleNavigationActionModal={handleToggleNavigationModal}
          onToggle={handleToggleModal}
        />

        <NavigationActionModal
          isOpen={isNavigationActionSheetOpen}
          onClose={handleCloseNavigationModal}
        />
      </View>
    </AppContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 9999,
    top: 50,
  },
})

export default MapSection
