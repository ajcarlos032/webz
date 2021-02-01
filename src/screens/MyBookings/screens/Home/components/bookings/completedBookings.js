import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import { bookingSelector } from '@store/Booking/Select'
import { completedBookingsSelector } from '@store/User/Select'

import NoData from '@components/NoData'

import Booking from '../booking'

import { snappedTimeRange } from '@screens/Offices/shared/utils'
import { UTCToLocalTime } from '@helpers/utils'

import styles from './styles'

const CompletedBookings = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)

  const { fetchBookingsLoading } = useSelector(bookingSelector)
  const bookings = useSelector(completedBookingsSelector)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000)

    return () => clearTimeout(timeout)
  }, [])

  const onReviewBooking = useCallback(
    (room, booking_attributes) => {
      const { startDate, end, start } = snappedTimeRange(
        moment().format('YYYY-MM-DD hh:mm:ss'),
        UTCToLocalTime(room.available_at),
      )

      const attributes = booking_attributes.map((b_attributes) => ({
        id: b_attributes.id,
        name: b_attributes.name,
        price: b_attributes.price,
        quantity: b_attributes.pivot?.quantity || 0,
        unit: b_attributes.unit,
        unit_name: b_attributes.unit_name,
      }))
      const bookingData = {
        attributes,
        date: startDate,
        end_time: end,
        room,
        start_time: start,
      }
      navigation.navigate('Offices', {
        params: { data: bookingData, ref: 'Bookings' },
        screen: 'ReviewBooking',
      })
    },
    [navigation],
  )

  return (
    <>
      <FlatList
        data={bookings}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Booking id={item.id} onPressBooking={onReviewBooking} completed />
        )}
        ListEmptyComponent={<NoData loading={fetchBookingsLoading || loading} />}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

CompletedBookings.propTypes = {}

CompletedBookings.defaultProps = {}

export default CompletedBookings
