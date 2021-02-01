import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

import { PRIMARY_BLACK } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import { DIM_V0 } from '@root/constants'

const RoomName = ({ name, style }) => {
  if (!name) return null

  return <Text style={[styles.name, style]}>{name}</Text>
}

const styles = StyleSheet.create({
  name: {
    alignSelf: 'flex-start',
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V0,
  },
})

RoomName.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
}

RoomName.defaultProps = {
  name: null,
  style: {},
}

export default RoomName
