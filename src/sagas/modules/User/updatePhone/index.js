import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * UPDATE_PHONE
 */
function* updatePhone({ payload, callback }) {
  console.log('Updating phone...')
  console.log(payload)
  try {
    yield put(UserActions.updatePhoneLoading())
    const result = yield apis.updatePhone(payload)
    console.log({ updatePhone: result })

    if (result.success) {
      yield put(
        UserActions.updatePhoneSuccess(result.message, payload.first ? null : payload.phone),
      )
      if (callback) callback()
    } else {
      yield put(UserActions.updatePhoneFailure(result.message))
    }
  } catch (error) {
    yield put(UserActions.updatePhoneFailure(errorHandling(error)))
  }
}

export default updatePhone
