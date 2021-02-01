import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * COMPLETE_BOOKING
 */
function* completeBooking({ payload, callback }) {
  console.log('complete booking...')
  console.log(payload)
  try {
    yield put(BookingActions.completeBookingLoading())
    const result = yield apis.completeBooking(payload)
    console.log({ result })

    if (result) {
      yield put(BookingActions.completeBookingSuccess())
      yield put(BookingActions.fetchBooking(payload))
      if (callback) callback()
    } else {
      yield put(BookingActions.completeBookingFailure())
    }
  } catch (error) {
    yield put(BookingActions.completeBookingFailure(errorHandling(error)))
  }
}

export default completeBooking
