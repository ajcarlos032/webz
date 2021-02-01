import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'

import Chart from '@components/Chart'

import { minutesToHRTimeStr } from '@components/DatePicker/utils'
import { runTiming } from './utils'

import { RW } from '@theme/utils'
import { ERROR, GRAY, SECONDARY, SUCCESS, TRANSPARENT, WHITE, YELLOW } from '@theme/colors'

import { BOOKING_STATUS } from '@screens/MyBookings/shared/constants'
import { RUN_OUT_TIME, STATE } from '../../constants'

import { CHART_SIZE, styles } from './styles'

const BookingTime = ({ start, end, status, onExpired }) => {
  const { t } = useContext(I18nContext)
  const totalTime = useRef(moment(end).diff(start, 'minutes')).current
  const [timeLeft, setTimeLeft] = useState(0)
  const [bookingState, setBookingState] = useState(undefined)

  // change booking state
  useEffect(() => {
    let _bookingState = STATE.ACTIVE
    if (timeLeft > 0 && timeLeft <= RUN_OUT_TIME) {
      _bookingState = STATE.ENDING
    } else if (status === BOOKING_STATUS.ACTIVE) {
      if (moment(end).isBefore(moment())) {
        _bookingState = STATE.ENDED
      } else {
        _bookingState = STATE.ACTIVE
      }
    } else if (status === BOOKING_STATUS.EXTENDED) {
      _bookingState = STATE.EXTENDED
    } else if (status === BOOKING_STATUS.COMPLETED) {
      _bookingState = STATE.COMPLETED
    } else if (status === BOOKING_STATUS.PENDING) {
      _bookingState = STATE.PENDING
    } else {
      _bookingState = undefined
    }

    setBookingState(_bookingState)
  }, [end, status, timeLeft])

  // count time
  useEffect(() => {
    const setLeft = () => {
      if ([STATE.ENDED, STATE.COMPLETED].includes(bookingState)) return

      let time = 0

      if (moment(start).isAfter(moment())) time = totalTime
      else time = Math.min(moment(end).diff(moment(), 'minutes'), totalTime)

      setTimeLeft(time)

      if (![STATE.EXTENDED, undefined].includes(bookingState) && time <= 0) {
        setBookingState(STATE.ENDED)
      }
    }

    setLeft()
    const interval = setInterval(() => setLeft(), 5000)

    return () => clearInterval(interval)
  }, [start, end, totalTime, bookingState])

  useEffect(() => {
    onExpired(bookingState === STATE.ENDED)
  }, [bookingState, onExpired])

  const isActiveTime = useMemo(
    () => [STATE.ACTIVE, STATE.COMPLETED, STATE.EXTENDED].includes(bookingState),
    [bookingState],
  )

  const progress = useMemo(() => {
    let fromRatio =
      bookingState === STATE.PENDING
        ? 0
        : Math.abs(
            timeLeft >= 0 ? (totalTime - timeLeft - 1) / totalTime : (timeLeft + 1) / totalTime,
          )

    let toRatio =
      bookingState === STATE.PENDING
        ? 1
        : Math.abs(timeLeft >= 0 ? (totalTime - timeLeft) / totalTime : timeLeft / totalTime)

    fromRatio = fromRatio > 1 ? fromRatio % 1 : fromRatio
    toRatio = toRatio > 1 ? toRatio % 1 : toRatio

    return runTiming(fromRatio, toRatio)
  }, [bookingState, timeLeft, totalTime])

  const strokeActiveColor = useMemo(() => {
    if (bookingState === undefined) return TRANSPARENT
    if (bookingState === STATE.PENDING) return YELLOW
    if (isActiveTime) return SUCCESS

    return ERROR
  }, [bookingState, isActiveTime])

  const strokeInActiveColor = useMemo(() => {
    if (bookingState === STATE.PENDING) return YELLOW

    return GRAY
  }, [bookingState])

  const fillActiveColor = useMemo(() => {
    if (bookingState === STATE.PENDING) return SECONDARY
    if (isActiveTime || timeLeft < 0) return `${SUCCESS}10`
    return WHITE
  }, [timeLeft, bookingState, isActiveTime])

  const fillInActiveColor = useMemo(() => {
    if (timeLeft === 0) return WHITE
    if (bookingState === STATE.ENDING || timeLeft < 0) return SECONDARY
    return WHITE
  }, [timeLeft, bookingState])

  const Label = useMemo(() => {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.timeLeftLabel}>{minutesToHRTimeStr(timeLeft)}</Text>
        <Text
          style={[
            styles.stateLabel,
            bookingState === STATE.PENDING && styles.pending,
            isActiveTime && styles.active,
            bookingState === STATE.ENDING && styles.ending,
          ]}
        >
          {bookingState === STATE.PENDING ? t('bookings.pending') : t('bookings.active')}
        </Text>
      </View>
    )
  }, [t, bookingState, isActiveTime, timeLeft])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('bookings.timeLeft')}</Text>
      <View style={styles.chartContainer}>
        <Chart
          progress={progress}
          size={CHART_SIZE}
          fillActiveColor={fillActiveColor}
          fillInActiveColor={fillInActiveColor}
          strokeWidth={RW(10)}
          strokeActiveColor={strokeActiveColor}
          strokeInActiveColor={strokeInActiveColor}
        >
          {Label}
        </Chart>
      </View>
    </View>
  )
}

BookingTime.propTypes = {
  end: PropTypes.string.isRequired,
  onExpired: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  status: PropTypes.number,
}

BookingTime.defaultProps = {
  status: undefined,
}

export default BookingTime
