import { Tabs } from 'expo-router'
import { useColorModeValue } from 'native-base'

import MapIcon from '../../assets/icons/MapIcon'
import WalletIcon from '../../assets/icons/WalletIcon'
import Colors, { colors } from '../../constants/Colors'
import StationsIcon from '../../assets/icons/StationsIcon'
import TransactionsIcon from '../../assets/icons/TransactionsIcon'

const tabs = [
  {
    name: 'index',
    title: 'Map',
    icon: ({ color }: any) => <MapIcon size={28} color={color} />,
    headerShown: false,
  },
  {
    name: 'stations',
    title: 'Stations',
    icon: ({ color }: any) => <StationsIcon size={28} color={color} />,
  },
  {
    name: 'transactions',
    title: 'Transactions',
    icon: ({ color }: any) => <TransactionsIcon size={28} color={color} />,
  },
  {
    name: 'wallet',
    title: 'Wallet',
    icon: ({ color }: any) => <WalletIcon size={28} color={color} />,
  },
]

export default function TabLayout() {
  const tabBackgroundColor = useColorModeValue(
    Colors.light.tabBackgroundDefault,
    Colors.dark.tabBackgroundDefault
  )
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textColor,
        tabBarInactiveBackgroundColor: tabBackgroundColor,
        tabBarStyle: {
          backgroundColor: tabBackgroundColor,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: tab.headerShown ?? true,
            title: tab.title,
            tabBarLabelStyle: {
              marginTop: -16,
              marginBottom: -16,
            },
            tabBarIcon: ({ color }) => <tab.icon color={color} />,
          }}
        />
      ))}
    </Tabs>
  )
}
