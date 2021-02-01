import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import Rating from '@components/Rating'

import { GRAY, PRIMARY_BLACK } from '@theme/colors'
import { DIM_H1, DIM_H4, DIM_V2 } from '@root/constants'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_SM } from '@theme/fonts'

const RoomRating = ({ rating, ratingCount }) => {
  const { isRTL } = useSelector(configSelector)

  return (
    <View style={styles.container}>
      <Rating isRTL={isRTL} rating={rating} readOnly />
      <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      {ratingCount !== undefined && <Text style={styles.ratingCount}>({ratingCount})</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: DIM_V2,
  },
  rating: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    paddingLeft: DIM_H4,
  },
  ratingCount: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    paddingLeft: DIM_H1,
  },
})

RoomRating.propTypes = {
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
}

RoomRating.defaultProps = {
  rating: 0,
  ratingCount: 0,
}

export default RoomRating
