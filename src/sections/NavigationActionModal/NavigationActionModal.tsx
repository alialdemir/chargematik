import { Linking } from 'react-native'

import CcActionsheet from '../../components/Actionsheet'
import AppleMapIcon from '../../assets/icons/AppleMapsIcon'
import GoogleMapIcon from '../../assets/icons/GoogleMapIcon'

type NavigationActionModalProps = {
  isOpen: boolean
  onClose: any
  coordinate: CoordinateType
}

export type CoordinateType = {
  latitude: number
  longitude: number
}

const NavigationActionModal = ({ isOpen, onClose, coordinate }: NavigationActionModalProps) => {
  const maps = [
    {
      icon: <AppleMapIcon />,
      text: 'Apple Maps',
      onPress: () => {
        if (coordinate && coordinate.latitude && coordinate.longitude) {
          const url = `maps://maps.apple.com/?q=${coordinate?.latitude},${coordinate?.longitude}`

          Linking.openURL(url)
        }
        onClose()
      },
    },
    {
      icon: <GoogleMapIcon />,
      text: 'Google Maps',
      onPress: () => {
        // if (coordinate && coordinate.latitude && coordinate.longitude) {
        //   const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`
        //   Linking.openURL(url)
        // }
        // onClose()
      },
    },
  ]
  return (
    <CcActionsheet title="Choose A Routing App" items={maps} isShow={isOpen} onClose={onClose} />
  )
}

export default NavigationActionModal
