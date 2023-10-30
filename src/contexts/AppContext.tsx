import { createContext } from 'react'

export const AppContext = createContext({
  coordinate: {
    latitude: 0,
    longitude: 0,
  },
})

const AppContextProvider = ({ value, children }: any) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values

  <AppContext.Provider value={value}>{children}</AppContext.Provider>
)

export default AppContextProvider
