import { useState } from 'react'
import { Input, Stack } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { colors } from '../../constants/Colors'
import SearchIcon from '../../assets/icons/SearchIcon'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {
    alert(`Searching for: ${searchText}`)
  }

  return (
    <Stack borderRadius={10} backgroundColor={colors.write} space={4} w="100%" alignItems="center">
      <Input
        width="full"
        borderWidth={0}
        height="32px"
        style={{ color: colors.black }}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        InputRightElement={
          <Stack
            backgroundColor={colors.cyan}
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
