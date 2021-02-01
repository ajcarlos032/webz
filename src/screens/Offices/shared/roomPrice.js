import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_SM, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_H5, DIM_H6 } from '@root/constants'

const RoomPrice = ({ price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: RH(20),
    paddingTop: RH(20),
    width: '100%',
  },
  price: {
    color: YELLOW,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT20,
  },
  priceContainer: {
    alignSelf: 'flex-start',
    backgroundColor: DARK_BLUE,
    borderRadius: DIM_H6,
    paddingHorizontal: DIM_H5,
    paddingVertical: RH(6),
  },
})

RoomPrice.propTypes = {
  price: PropTypes.string,
}

RoomPrice.defaultProps = {
  price: null,
}

export default RoomPrice
