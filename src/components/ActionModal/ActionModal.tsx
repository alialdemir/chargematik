import { View, Modal, StyleSheet } from 'react-native'

type ActionModalProps = {
  isVisible: boolean
  children: any
  height?: number
}

const ActionModal = ({ isVisible, children, height = 382 }: ActionModalProps) => (
  <Modal transparent visible={isVisible} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={{ ...styles.modalContent, height }}>{children}</View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingTop: 43,
    paddingLeft: 20,
    paddingRight: 25,
  },
})

export default ActionModal
