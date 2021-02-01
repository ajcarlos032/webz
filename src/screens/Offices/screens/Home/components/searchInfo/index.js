import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const searchIcon = require('@assets/icons/ic_input_search.png')
const clearIcon = require('@assets/icons/ic_screen_close.png')

const SearchInfo = ({ t, text, resultNum, onPress, onRemove }) => {
  if (!text) return null

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.infoContainer} onPress={onPress}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <Text numberOfLines={1} style={styles.searchText}>
          {text}
        </Text>
        <View style={styles.spacing} />
        <TouchableOpacity style={styles.clearButton} onPress={onRemove}>
          <Image source={clearIcon} style={styles.clearIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.searchResult}>{t('home.searchResult')}</Text>
        <Text style={styles.searchResult}>{` (${resultNum}) `}</Text>
      </View>
    </View>
  )
}

SearchInfo.propTypes = {
  onPress: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  resultNum: PropTypes.number,
  t: PropTypes.func.isRequired,
  text: PropTypes.string,
}

SearchInfo.defaultProps = {
  resultNum: 0,
  text: '',
}

export default SearchInfo
