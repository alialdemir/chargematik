import { useState } from 'react'
import { View } from 'native-base'

import MapView from '../../components/MapView'
import SearchInput from '../../components/SearchInput'
import { NavigationActionModal } from '../NavigationActionModal'
import StationDetailActionModal from '../StationDetaiActionModal'

const MapSection = () => {
  const [isShowStationDetail, setIsShowStationDetail] = useState(false)
  const [isNavigationActionSheetOpen, setIsNavigationActionSheetOpen] = useState(false)
  const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 })

  const setSelectedCoordinate = (coor: any) => {
    setCoordinate(coor)
    setIsShowStationDetail(!isShowStationDetail)
  }

  const handleOpenNavigationModal = () => {
    setIsNavigationActionSheetOpen(true)
  }

  const handleCloseNavigationModal = () => {
    setIsNavigationActionSheetOpen(false)
  }

  const handleToggleStationDetailActionModal = () => {
    setIsShowStationDetail(!isShowStationDetail)
  }

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <View position="absolute" top={50} backgroundColor="transparent" zIndex={9999}>
        <SearchInput />
      </View>

      <MapView setSelectedCoordinate={setSelectedCoordinate} />

      {isShowStationDetail ? (
        <StationDetailActionModal
          isShow={isShowStationDetail}
          onToggleNavigationActionModal={handleOpenNavigationModal}
          onToggle={handleToggleStationDetailActionModal}
        />
      ) : null}

      <NavigationActionModal
        coordinate={coordinate}
        isOpen={isNavigationActionSheetOpen}
        onClose={handleCloseNavigationModal}
      />
    </View>
  )
}

export default MapSection
