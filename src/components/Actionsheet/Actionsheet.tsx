import { Box, Text, View, Button, Actionsheet } from 'native-base'

import BackArrowIcon from '../../assets/icons/BackArrowIcon'

type CcActionsheetProps = {
  isShow: boolean
  onClose: any
  items: ActionSheetItem[]
  title?: string
}

type ActionSheetItem = {
  icon: any
  text: string
  onPress: any
}

const CcActionsheet = ({ isShow, onClose, items, title }: CcActionsheetProps) => (
  <Actionsheet
    isOpen={isShow}
    onClose={onClose}
    size="full"
    disableOverlay
  >
    <Actionsheet.Content borderRadius={35}
    roundedTop={50}>
      <View px={2} flexDirection="row" justifyContent="space-around">
        {title ? (
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              {title}
            </Text>
          </Box>
        ) : null}

        <Button onPress={() => onClose()} startIcon={<BackArrowIcon />} colorScheme="transparent" />
      </View>

      {items.map((item) => (
        <Actionsheet.Item key={item.text} startIcon={item.icon} onPress={item.onPress}>
          {item.text}
        </Actionsheet.Item>
      ))}
    </Actionsheet.Content>
  </Actionsheet>
)

export default CcActionsheet
