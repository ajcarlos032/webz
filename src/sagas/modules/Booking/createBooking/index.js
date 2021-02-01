import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CREATE_BOOKING
 */
function* createBooking({ payload, callback }) {
  console.log('create booking...')
  console.log(payload)
  try {
    yield put(BookingActions.createBookingLoading())
    const result = yield apis.createBooking(payload)
    console.log({ result })

    if (result) {
      yield put(BookingActions.createBookingSuccess())
      yield put(UserActions.updateBookings(result))
      if (callback) callback(result.id)
      yield put(UserActions.me())
    } else {
      yield put(BookingActions.createBookingFailure('Something went wrong.'))
    }
  } catch (error) {
    yield put(BookingActions.createBookingFailure(errorHandling(error)))
  }
}

export default createBooking
