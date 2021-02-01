import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * UPLOAD_LOGOS
 */
function* uploadLogos({ payload, callback }) {
  console.log('upload logos...')
  console.log(payload)
  try {
    yield put(BookingActions.uploadLogosLoading())
    const result = yield apis.uploadLogos(payload)
    console.log({ uploadLogos: result })

    if (result) {
      yield put(BookingActions.uploadLogosSuccess())
      yield put(UserActions.updateLogos(result[0]))
      if (callback) callback(result[0])
    } else {
      yield put(BookingActions.uploadLogosFailure())
    }
  } catch (error) {
    yield put(BookingActions.uploadLogosFailure(errorHandling(error)))
  }
}

export default uploadLogos
