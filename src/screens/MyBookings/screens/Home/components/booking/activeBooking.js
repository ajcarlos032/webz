import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { bookingByIdSelector } from '@store/User/Select'

import RoomItem from '@screens/Offices/shared/roomItem'
import BookingDate from '@screens/MyBookings/screens/shared/bookingDate'

import styles from './styles'

const Booking = ({ id, onPressBooking }) => {
  const { room, start_date: start, end_date: end } = useSelector(bookingByIdSelector(id))

  return (
    <View style={styles.container}>
      <View style={styles.roomContainer}>
        <RoomItem room={room} id={`${room.id}`} onPressItem={() => onPressBooking(id)} />
        <BookingDate start={start} end={end} />
      </View>
    </View>
  )
}

Booking.propTypes = {
  id: PropTypes.string.isRequired,
  onPressBooking: PropTypes.func.isRequired,
}

Booking.defaultProps = {}

export default Booking
