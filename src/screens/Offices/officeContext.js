/* eslint-disable sort-keys */
import { createContext } from 'react'
import moment from 'moment'

import { ANYTIME_VALUE } from '@components/DatePicker/utils'

export default createContext({
  searchName: null,
  setSearchName: () => {},
  endTime: ANYTIME_VALUE,
  setEndTime: () => {},
  facilities: [],
  setFacilities: () => {},
  seats: 0,
  setSeats: () => {},
  selectedDate: `${moment().format('YYYY-MM-DD')}`,
  setSelectedDate: () => {},
  selectedTypes: [],
  setSelectedTypes: () => {},
  startTime: ANYTIME_VALUE,
  setStartTime: () => {},
  bookingData: {},
  updateBookingData: () => {},
  setShowBookingModal: () => {},
})
