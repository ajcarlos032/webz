import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { bookingSelector } from '@store/Booking/Select'
import { activeBookingsSelector } from '@store/User/Select'

import NoData from '@components/NoData'

import Booking from '../booking'

import styles from './styles'

const ActiveBookings = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)

  const { fetchBookingsLoading } = useSelector(bookingSelector)
  const bookings = useSelector(activeBookingsSelector)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000)

    return () => clearTimeout(timeout)
  }, [])

  const onPressBooking = useCallback(
    (id) => {
      navigation.navigate('ActiveBookingRoom', { id })
    },
    [navigation],
  )

  return (
    <FlatList
      data={bookings}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Booking id={item.id} onPressBooking={onPressBooking} />}
      ListEmptyComponent={<NoData loading={fetchBookingsLoading || loading} />}
      keyExtractor={(item) => item.id}
    />
  )
}

ActiveBookings.propTypes = {}

ActiveBookings.defaultProps = {}

export default ActiveBookings
