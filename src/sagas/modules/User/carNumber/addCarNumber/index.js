import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * ADD_CAR_NUMBER
 */
function* addCarNumber({ payload, callback }) {
  console.log('Adding car number...')
  console.log(payload)
  try {
    yield put(UserActions.addCarNumberLoading())
    const result = yield apis.addCarNumber(payload)
    console.log({ addCarNumber: result })

    if (result) {
      yield put(UserActions.addCarNumberSuccess(result))
      if (callback) callback()
    } else {
      yield put(UserActions.addCarNumberFailure('Something went wrong while creating.'))
    }
  } catch (error) {
    yield put(UserActions.addCarNumberFailure(errorHandling(error)))
  }
}

export default addCarNumber
