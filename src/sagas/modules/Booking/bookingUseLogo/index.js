import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * BOOKING_USE_LOGO
 */
function* bookingUseLogo({ payload }) {
  console.log('useLogo...')
  console.log(payload)
  try {
    yield put(BookingActions.bookingUseLogoLoading())
    const result = yield apis.useLogo(payload)
    console.log({ useLogo: result })

    if (result) {
      yield put(BookingActions.bookingUseLogoSuccess())
      yield put(BookingActions.fetchBooking({ id: payload.booking_id }))
    } else {
      yield put(BookingActions.bookingUseLogoFailure())
    }
  } catch (error) {
    yield put(BookingActions.bookingUseLogoFailure(errorHandling(error)))
  }
}

export default bookingUseLogo
