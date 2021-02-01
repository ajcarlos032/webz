import React from 'react'
import PropTypes from 'prop-types'

import ActiveBooking from './activeBooking'
import CompletedBooking from './completedBooking'

const Booking = ({ id, onPressBooking, completed }) => {
  if (completed) return <CompletedBooking id={id} onPressBooking={onPressBooking} />

  return <ActiveBooking id={id} onPressBooking={onPressBooking} />
}

Booking.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onPressBooking: PropTypes.func.isRequired,
}

Booking.defaultProps = {
  completed: false,
}

export default Booking
