import { put } from 'redux-saga/effects'

import AuthActions from '@store/Auth/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'
/**
 * RESTORE_PASSWORD
 */
function* restorePassword({ payload, callback }) {
  console.log('Restoring password...')
  console.log(payload)
  try {
    yield put(AuthActions.restorePasswordLoading())
    const result = yield apis.restorePassword(payload)
    console.log({ restorePassword: result })
    if (result.success) {
      yield put(AuthActions.restorePasswordSuccess(result.message))
      if (callback) callback()
    } else {
      yield put(AuthActions.restorePasswordFailure(result.message))
    }
  } catch (error) {
    yield put(AuthActions.restorePasswordFailure(errorHandling(error)))
  }
}

export default restorePassword
