import { put } from 'redux-saga/effects'

import AuthActions from '@store/Auth/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * VERIFICATION_CODE_FOR_RESTORE
 */
function* verificationCodeForRestore({ payload, callback }) {
  console.log('verifyPhone for password restoring...')
  console.log({ payload })
  try {
    yield put(AuthActions.verificationCodeForRestoreLoading())
    const result = yield apis.verifyPhoneForRestorePassword(payload)

    console.log({ verificationCodeForRestore: result })
    if (result.success) {
      yield put(AuthActions.verificationCodeForRestoreSuccess(result.message))
      if (callback) callback(result.reset_token)
    } else {
      yield put(AuthActions.verificationCodeForRestoreFailure())
    }
  } catch (error) {
    console.log(error)
    yield put(AuthActions.verificationCodeForRestoreFailure(errorHandling(error)))
  }
}

export default verificationCodeForRestore
