import { Text, Stack } from 'native-base'

type IconTextItemProps = {
  text: string
  icon: any
}

const IconTextItem = ({ text, icon }: IconTextItemProps) => (
  <Stack
    style={{
      marginTop: 8,
      flexDirection: 'row',
      gap: 2,
      alignItems: 'center',
    }}
  >
    {icon}
    <Text>{text}</Text>
  </Stack>
)

export default IconTextItem
