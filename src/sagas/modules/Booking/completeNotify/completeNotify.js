import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * COMPLETE_BOOKING_NOTIFY
 */
function* completeBookingNotify({ payload, callback }) {
  console.log('complete booking notify...')
  console.log(payload)
  try {
    yield put(BookingActions.completeBookingNotifyLoading())
    const result = yield apis.completeBookingNotify(payload)
    if (result) {
      yield put(BookingActions.completeBookingNotifySuccess())
      yield put(BookingActions.fetchBooking(payload))
      if (callback) callback()
    } else {
      yield put(BookingActions.completeBookingNotifyFailure())
    }
  } catch (error) {
    yield put(BookingActions.completeBookingNotifyFailure(errorHandling(error)))
  }
}

export default completeBookingNotify
