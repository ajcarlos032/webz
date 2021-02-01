import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * UPDATE_PASSWORD
 */
function* updatePassword({ payload, callback }) {
  console.log('Updating password...')
  console.log(payload)
  try {
    yield put(UserActions.updatePasswordLoading())
    const result = yield apis.updatePassword(payload)
    console.log({ updatePassword: result })

    if (result.success) {
      yield put(UserActions.updatePasswordSuccess(result.message))
      if (callback) callback()
    } else {
      yield put(UserActions.updatePasswordFailure(result.message))
    }
  } catch (error) {
    yield put(UserActions.updatePasswordFailure(errorHandling(error)))
  }
}

export default updatePassword
