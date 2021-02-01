import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const historyIcon = require('@assets/icons/ic_time.png')
const removeIcon = require('@assets/icons/ic_close.png')

const HistoryItem = ({ text, onPressItem, onRemove }) => {
  if (!text) return null

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressItem(text)}>
      <Image source={historyIcon} style={styles.historyIcon} />
      <View style={styles.spacing} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.searchText}>
          {text}
        </Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(text)}>
          <Image source={removeIcon} style={styles.removeIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

HistoryItem.propTypes = {
  onPressItem: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string,
}

HistoryItem.defaultProps = {
  text: '',
}

export default HistoryItem
