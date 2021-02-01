import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_BOOKINGS
 */
function* fetchBookings() {
  console.log('Fetching my bookings...')
  try {
    yield put(BookingActions.fetchBookingsLoading())
    const result = yield apis.fetchBookings()
    yield put(BookingActions.fetchBookingsSuccess())
    yield put(UserActions.setBookings(result))
  } catch (error) {
    console.log(error)
    yield put(BookingActions.fetchBookingsFailure(errorHandling(error)))
  }
}

export default fetchBookings
