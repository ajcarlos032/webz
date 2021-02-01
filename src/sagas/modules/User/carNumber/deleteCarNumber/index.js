import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * DELETE_CAR_NUMBER
 */
function* deleteCarNumber({ id }) {
  console.log('Deleting car number...')
  console.log({ id })
  try {
    yield put(UserActions.deleteCarNumberLoading())
    const result = yield apis.deleteCarNumber({ id })
    console.log({ delete: result })

    if (result) {
      yield put(UserActions.deleteCarNumberSuccess(id))
    } else {
      yield put(UserActions.deleteCarNumberFailure('Something went wrong.'))
    }
  } catch (error) {
    yield put(UserActions.deleteCarNumberFailure(errorHandling(error)))
  }
}

export default deleteCarNumber
