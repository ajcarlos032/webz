import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import Stepper from '@screens/Offices/screens/shared/stepper'

import { PRIMARY_BLACK } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE } from '@theme/fonts'

import sharedStyles from '../styles'

const Seats = ({ title, seats, onChange }) => {
  return (
    <View style={[styles.container, sharedStyles.row]}>
      <Text style={styles.label}>{title}</Text>
      <Stepper value={seats} onChange={onChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
  },
})

Seats.propTypes = {
  onChange: PropTypes.func.isRequired,
  seats: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

Seats.defaultProps = {}

export default Seats
