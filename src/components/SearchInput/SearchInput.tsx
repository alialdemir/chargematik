import { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { useThemeColor } from '../Themed'
import SearchIcon from '../../assets/icons/SearchIcon'

const SearchInput = () => {
  const colors = useThemeColor()

  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {
    alert(`Searching for: ${searchText}`)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search Station..."
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        placeholderTextColor={colors.placeholderText}
      />
      <TouchableOpacity
        onPress={handleSearch}
        style={{
          backgroundColor: colors.searchInputBackground,
          ...styles.searchButton,
        }}
      >
        <SearchIcon />
      </TouchableOpacity>
    </View>
  )
}

const borderRadius = 10
const styles = StyleSheet.create({
  inputContainer: {
    height: 32,
    borderRadius,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  input: {
    color: '#0C2964',
    fontSize: 14,
    width: 262,

    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    paddingTop: 10,
  },

  searchButton: {
    height: 32,
    width: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
})

export default SearchInput
