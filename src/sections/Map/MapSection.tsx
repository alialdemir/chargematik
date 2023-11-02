import { useState } from 'react'
import { View, Text } from 'native-base'

import MapView from '../../components/MapView'
import SearchInput from '../../components/SearchInput'
import { NavigationActionModal } from '../NavigationActionModal'
import StationDetailActionModal from '../StationDetaiActionModal'

const MapSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isNavigationActionSheetOpen, setIsNavigationActionSheetOpen] = useState(false)
  const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 })

  const setSelectedCoordinate = (coor: any) => {
    setCoordinate(coor)
    setIsModalVisible(!isModalVisible)
  }

  const handleOpenNavigationModal = () => {
    setIsNavigationActionSheetOpen(true)
  }

  const handleCloseNavigationModal = () => {
    setIsNavigationActionSheetOpen(false)
  }

  const handleToggleStationDetailActionModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <View position="absolute" top={50} backgroundColor="transparent" zIndex={9999}>
        <SearchInput />
        <Text>{JSON.stringify(coordinate)}</Text>
      </View>

      <MapView setSelectedCoordinate={setSelectedCoordinate} />

      <StationDetailActionModal
        isVisible={isModalVisible}
        onToggleNavigationActionModal={handleOpenNavigationModal}
        onToggle={handleToggleStationDetailActionModal}
      />

      <NavigationActionModal
        coordinate={coordinate}
        isOpen={isNavigationActionSheetOpen}
        onClose={handleCloseNavigationModal}
      />
    </View>
  )
}

export default MapSection
