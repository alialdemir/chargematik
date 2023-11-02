import { useState } from 'react'
import { Input, Stack } from 'native-base'
import { TouchableOpacity } from 'react-native'

import SearchIcon from '../../assets/icons/SearchIcon'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {
    alert(`Searching for: ${searchText}`)
  }

  return (
    <Stack borderRadius={10} backgroundColor="#fff" space={4} w="100%" alignItems="center">
      <Input
        width={262}
        borderWidth={0}
        height="32px"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        InputRightElement={
          <Stack
            backgroundColor="#0CE8A6"
            width={16}
            height="32px"
            justifyContent="center"
            alignItems="center"
            style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
          >
            <TouchableOpacity onPress={handleSearch}>
              <SearchIcon />
            </TouchableOpacity>
          </Stack>
        }
        placeholder="Search Station..."
      />
    </Stack>
  )
}

export default SearchInput
