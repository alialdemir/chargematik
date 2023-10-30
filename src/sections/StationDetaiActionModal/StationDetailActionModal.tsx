import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import ItemList from './ItemList'
import ActionModal from '../../components/ActionModal'
import TravelSwitch from './TravelSwitch'
import { useThemeColor } from '../../components/Themed'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'
import ThunderboltIcon from '../../assets/icons/ThunderboltIcon'

type StationDetailActionModalProps = {
  isVisible: boolean
  onToggle: any
  onToggleNavigationActionModal: any
}

const StationDetailActionModal = ({
  isVisible,
  onToggle,
  onToggleNavigationActionModal,
}: StationDetailActionModalProps) => {
  const colors = useThemeColor()

  const handleToggleModal = () => {
    onToggle()
    onToggleNavigationActionModal()
  }

  return (
    <ActionModal isVisible={isVisible} height={382}>
      <View style={styles.modalHeaderContainer}>
        <View style={styles.titleContainer}>
          <ThunderboltIcon />
          <Text
            style={{
              color: colors.stationDetailTitle,
              ...styles.modalText,
            }}
          >
            Hitech EV
          </Text>
        </View>

        <TouchableOpacity onPress={onToggle}>
          <BackArrowIcon />
        </TouchableOpacity>
      </View>
      <View />

      <ItemList />
      <TravelSwitch onSwitch={handleToggleModal} />
    </ActionModal>
  )
}

const styles = StyleSheet.create({
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 19,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
  },
})

export default StationDetailActionModal
