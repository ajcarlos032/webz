import React, { useMemo, useCallback, useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import BookingContext from '@screens/Offices/shared/bookingModal/bookingContext'

import { getTimeDiffMin, getStrTimeDiffStr } from '@components/DatePicker/utils'
import { addTimeToTimeStr } from '@screens/Offices/screens/shared/utils'

import { FINAL_TIME, MIN_BOOKING_TIME, SLIDE_STEP } from '@screens/Offices/shared/utils/constants'

import styles from './styles'

const decreaseIcon = require('@assets/icons/ic_minus.png')
const increaseIcon = require('@assets/icons/ic_plus.png')

const Stepper = () => {
  const { start, end, onChange } = useContext(BookingContext)
  const timeDiffStr = useMemo(() => getStrTimeDiffStr(start, end), [start, end])
  const timeDiffMin = useMemo(() => getTimeDiffMin(start, end), [start, end])

  const _onChange = useCallback(
    (delta) => {
      onChange(start, addTimeToTimeStr(end, delta))
    },
    [start, end, onChange],
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonWrapper}
        disabled={timeDiffMin === MIN_BOOKING_TIME}
        activeOpacity={0.5}
        onPress={() => _onChange(-SLIDE_STEP)}
      >
        <View style={[styles.button, timeDiffMin === MIN_BOOKING_TIME && styles.buttonDisabled]}>
          <Image source={decreaseIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.value}>{timeDiffStr}</Text>
      <TouchableOpacity
        style={styles.buttonWrapper}
        disabled={end === FINAL_TIME}
        activeOpacity={0.5}
        onPress={() => _onChange(SLIDE_STEP)}
      >
        <View style={[styles.button, end === FINAL_TIME && styles.buttonDisabled]}>
          <Image source={increaseIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

Stepper.propTypes = {}

Stepper.defaultProps = {}

export default Stepper
