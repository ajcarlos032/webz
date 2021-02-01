import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_BOOKING
 */
function* fetchBooking({ payload }) {
  console.log('Fetching single booking...')
  try {
    yield put(BookingActions.fetchBookingLoading())
    const result = yield apis.fetchBooking(payload)
    console.log({ fetchBooking: result })
    yield put(BookingActions.fetchBookingSuccess())
    yield put(UserActions.updateBookings(result))
  } catch (error) {
    yield put(BookingActions.fetchBookingFailure(errorHandling(error)))
  }
}

export default fetchBooking
