import { FlatList } from 'native-base'

import TextItem, { TextItemType } from './TextItem'
import { useThemeColor } from '../../components/Themed'

const ItemList = () => {
  const colors = useThemeColor()

  const data: TextItemType[] = [
    {
      label: 'Address',
      description: '83D, Patrika Nagar, HITEC City, Madhapur, Telangana 500081',
    },
    {
      label: 'Status',
      description: 'Open',
      descriptionColor: colors.stationDetailStatusOpen,
    },
    { label: 'ETA', description: '15 Min' },
    {
      label: 'Plug Points',
      description: '4 type A 2 type B',
      isShowImage: true,
    },
  ]

  const renderItem = ({ item }: any) => <TextItem {...item} />

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.label} />
}

export default ItemList
