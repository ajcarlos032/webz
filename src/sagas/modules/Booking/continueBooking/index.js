import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CONTINUE_BOOKING
 */
function* continueBooking({ payload, callback }) {
  console.log('continue booking...')
  console.log(payload)
  try {
    yield put(BookingActions.continueBookingLoading())
    const result = yield apis.continueBooking(payload)
    console.log({ result })

    if (result) {
      yield put(BookingActions.continueBookingSuccess())
      yield put(BookingActions.fetchBooking(payload))
      if (callback) callback()
    } else {
      yield put(BookingActions.continueBookingFailure())
    }
  } catch (error) {
    yield put(BookingActions.continueBookingFailure(errorHandling(error)))
  }
}

export default continueBooking
