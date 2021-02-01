import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { RW } from '@theme/utils'
import { PRIMARY_BLACK, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H8 } from '@root/constants'

const decreaseIcon = require('@assets/icons/ic_minus.png')
const increaseIcon = require('@assets/icons/ic_plus.png')

const Stepper = ({ value, step, onChange }) => {
  const onDecrease = useCallback(() => {
    const val = Math.max(0, value - step)
    onChange(val)
  }, [value, step, onChange])

  const onIncrease = useCallback(() => {
    onChange(value + step)
  }, [value, step, onChange])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={onDecrease}>
        <Image source={decreaseIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.count}>{value}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={onIncrease}>
        <Image source={increaseIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: DIM_H8 / 2,
    height: DIM_H8,
    justifyContent: 'center',
    width: DIM_H8,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  count: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_MD,
    textAlign: 'center',
    width: RW(50),
  },
  icon: {
    resizeMode: 'contain',
    width: RW(16),
  },
})

Stepper.propTypes = {
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  value: PropTypes.number,
}

Stepper.defaultProps = {
  step: 1,
  value: 0,
}

export default Stepper
