import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { BOOKING_STATUS } from '@screens/MyBookings/shared/constants'

import { errorHandling } from '@sagas/utils'

/**
 * COMPLETE_ALL_BOOKINGS
 */
function* completeAllBookings({ callback }) {
  console.log('complete all bookings and notify...')
  try {
    yield put(BookingActions.completeAllBookingsLoading())
    const result = yield apis.completeAllBookings()
    console.log(result)
    if (result) {
      yield put(BookingActions.completeAllBookingsSuccess())
      const bookingIds = result.map(({ booking_id }) => booking_id)

      yield put(UserActions.updateBookingsStatus(bookingIds, BOOKING_STATUS.COMPLETED, 'Completed'))
      if (callback) callback(result)
    } else {
      yield put(BookingActions.completeAllBookingsFailure())
    }
  } catch (error) {
    yield put(BookingActions.completeAllBookingsFailure(errorHandling(error)))
  }
}

export default completeAllBookings
