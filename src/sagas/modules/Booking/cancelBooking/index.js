import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CANCEL_BOOKING
 */
function* cancelBooking({ payload, callback }) {
  console.log('cancel booking...')
  console.log(payload)
  try {
    yield put(BookingActions.cancelBookingLoading())
    const result = yield apis.cancelBooking(payload)
    console.log({ result })

    if (callback) callback(result.success)

    if (result.success) {
      yield put(BookingActions.cancelBookingSuccess(result.message))
      yield put(BookingActions.fetchBooking(payload))
    } else {
      yield put(BookingActions.cancelBookingFailure())
    }
  } catch (error) {
    yield put(BookingActions.cancelBookingFailure(errorHandling(error)))
  }
}

export default cancelBooking
