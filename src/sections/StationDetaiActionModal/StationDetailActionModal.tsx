import { ScrollView } from 'native-base'

import ItemList from './ItemList'
import TravelSwitch from './TravelSwitch'
import CcActionsheet from '../../components/Actionsheet'
import ThunderboltIcon from '../../assets/icons/ThunderboltIcon'

type StationDetailActionModalProps = {
  isShow: boolean
  onToggle: any
  onToggleNavigationActionModal: any
}

const StationDetailActionModal = ({
  isShow,
  onToggle,
  onToggleNavigationActionModal,
}: StationDetailActionModalProps) => {
  const handleToggleModal = () => {
    onToggle()
    onToggleNavigationActionModal()
  }

  return (
    <CcActionsheet title="Hitech EV" icon={<ThunderboltIcon />} isShow={isShow} onClose={onToggle}>
      <ScrollView>
        <ItemList />
        <TravelSwitch onSwitch={handleToggleModal} />
      </ScrollView>
    </CcActionsheet>
  )
}

export default StationDetailActionModal
