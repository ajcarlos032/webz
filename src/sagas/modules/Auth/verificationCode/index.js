import { put } from 'redux-saga/effects'

import AuthActions from '@store/Auth/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * VERIFICATION_CODE
 */
function* verificationCode({ payload, callback }) {
  console.log('verifyPhone...')
  console.log({ payload })
  try {
    yield put(AuthActions.verificationCodeLoading())
    const result = yield apis.verificationCode(payload)

    console.log({ verificationCode: result })
    if (result) {
      yield put(AuthActions.verificationCodeSuccess())
      if (callback) callback()
    } else {
      yield put(AuthActions.verificationCodeFailure())
    }
  } catch (error) {
    console.log(error)
    yield put(AuthActions.verificationCodeFailure(errorHandling(error)))
  }
}

export default verificationCode
