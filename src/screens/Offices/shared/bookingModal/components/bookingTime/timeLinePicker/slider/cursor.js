/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { cursorStyles as styles } from '../sharedStyles'

const Cursor = ({ panHandlers, offsetX }) => {
  return (
    <View style={[styles.container, { left: offsetX }]} {...panHandlers}>
      <View style={[styles.cursor, styles.dropShadow]} />
    </View>
  )
}

Cursor.propTypes = {
  offsetX: PropTypes.number,
  panHandlers: PropTypes.object,
}

Cursor.defaultProps = {
  offsetX: 0,
  panHandlers: null,
}

export default Cursor
