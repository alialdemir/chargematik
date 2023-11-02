import { Box, Text, View, Button, Actionsheet } from 'native-base'

import { colors } from '../../constants/Colors'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'

type ActionsheetProps = {
  isShow: boolean
  onClose: any
  items?: ActionSheetItem[]
  title?: string
  icon?: any
  children?: any
}

type ActionSheetItem = {
  icon: any
  text: string
  onPress: any
}

const CcActionsheet = ({ isShow, onClose, items, title, children, icon }: ActionsheetProps) => (
  <Actionsheet isOpen={isShow} onClose={onClose} size="full" disableOverlay>
    <Actionsheet.Content borderRadius={35} roundedTop={50}>
      <View px={2} flexDirection="row" justifyContent="space-around" alignItems="flex-end">
        {title ? (
          <Box w="100%" h={60} px={4} flexDirection="row">
            {icon}
            <Text
              fontSize={18}
              fontWeight="semibold"
              marginBottom={19}
              color={colors.primary}
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

      {items?.map((item) => (
        <Actionsheet.Item key={item.text} startIcon={item.icon} onPress={item.onPress}>
          {item.text}
        </Actionsheet.Item>
      ))}

      {children ?? children}
    </Actionsheet.Content>
  </Actionsheet>
)

export default CcActionsheet
