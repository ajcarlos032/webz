import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

import { formatBookingDate } from './utils'

import { GRAY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_V0 } from '@root/constants'

const BookingDate = ({ start, end }) => {
  return <Text style={styles.bookingDate}>{formatBookingDate(start, end)}</Text>
}

const styles = StyleSheet.create({
  bookingDate: {
    alignSelf: 'flex-start',
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingVertical: DIM_V0,
  },
})

BookingDate.propTypes = {
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
}

BookingDate.defaultProps = {}

export default BookingDate
