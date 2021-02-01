import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * LOCATION_STATE
 */
function* locationState({ payload, callback }) {
  console.log({ updateLocationState: payload })
  try {
    yield put(BookingActions.locationStateLoading())
    const result = yield apis.locationState(payload)
    console.log(result)
    if (result) {
      yield put(BookingActions.locationStateSuccess())
      if (callback) callback()
    } else {
      yield put(BookingActions.locationStateFailure())
    }
  } catch (error) {
    yield put(BookingActions.locationStateFailure(errorHandling(error)))
  }
}

export default locationState
