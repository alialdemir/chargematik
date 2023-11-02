import { View, ScrollView } from 'native-base'

import SearchInput from '../../components/SearchInput'
import StationCard from '../../components/StationCard'

const TabStationsScreen = () => (
  <View padding="16px">
    <SearchInput />
    <ScrollView>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map(() => (
        <StationCard />
      ))}
    </ScrollView>
  </View>
)

export default TabStationsScreen
