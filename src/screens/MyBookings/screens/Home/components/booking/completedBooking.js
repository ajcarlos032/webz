import React, { useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'

import { bookingByIdSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'

import RoomItem from '@screens/Offices/shared/roomItem'
import TimeLine from '@screens/Offices/shared/timeLine'
import BookingDate from '@screens/MyBookings/screens/shared/bookingDate'

import { SLIDE_STEP, SLIDER_WIDTH } from '@screens/Offices/shared/utils/constants'
import { getValueFromMinutes, getValueFromTimeStr } from '@screens/Offices/shared/utils'

import { UTCToLocalTime } from '@helpers/utils'

import { SCREEN_WIDTH } from '@root/constants'
import { ERROR } from '@theme/colors'

import styles from './styles'

const Booking = ({ id, onPressBooking }) => {
  const timeLineView = useRef(null)
  const { isRTL } = useSelector(configSelector)

  const { room, room_attributes, start_date: start, end_date: end } = useSelector(
    bookingByIdSelector(id),
  )

  const startValue = useMemo(() => {
    const time = UTCToLocalTime(start, 'HH:mm')
    return getValueFromTimeStr(time)
  }, [start])

  const endValue = useMemo(() => {
    const time = UTCToLocalTime(end, 'HH:mm')
    return getValueFromTimeStr(time)
  }, [end])

  const width = useMemo(() => {
    let _endValue = endValue
    if (endValue < startValue) {
      _endValue = SLIDER_WIDTH + endValue
    }
    return _endValue - startValue
  }, [startValue, endValue])

  // auto scroll to place the `booking time` in the center
  useEffect(() => {
    const pivotValue = isRTL ? SLIDER_WIDTH - endValue : startValue

    const x = () => {
      if (width > SCREEN_WIDTH) return pivotValue - getValueFromMinutes(SLIDE_STEP)
      return Math.max(0, pivotValue - (SCREEN_WIDTH - width) / 2)
    }

    setTimeout(() => timeLineView.current?.scrollTo({ x: x() }), 5)
  }, [isRTL, timeLineView, width, endValue, startValue])

  return (
    <View style={styles.container}>
      <View style={styles.roomContainer}>
        <RoomItem
          room={room}
          id={`${room.id}`}
          onPressItem={() => onPressBooking(room, room_attributes)}
        />
        <BookingDate start={start} end={end} />
      </View>

      <ScrollView
        ref={timeLineView}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <TimeLine offsetX={startValue} width={width} activeColor={ERROR} />
      </ScrollView>
    </View>
  )
}

Booking.propTypes = {
  id: PropTypes.string.isRequired,
  onPressBooking: PropTypes.func.isRequired,
}

Booking.defaultProps = {}

export default Booking
