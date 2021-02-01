import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { imageWithDefault } from '@helpers/imageHelper'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const RoomItem = ({ id, name, image, isRTL, onPressItem }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressItem(id)}>
      <Image source={imageWithDefault(image)} style={styles.roomImage} />
      <View style={styles.spacing} />
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.roomName}>
          {name}
        </Text>
        <View style={styles.arrowIconContainer}>
          <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

RoomItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  isRTL: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
}

RoomItem.defaultProps = {
  image: undefined,
  isRTL: false,
}

export default RoomItem
