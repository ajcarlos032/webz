import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * UPDATE_PROFILE
 */
function* updateProfile({ payload }) {
  console.log('Updating profile...')
  console.log(payload)
  try {
    yield put(UserActions.updateProfileLoading())
    const result = yield apis.updateProfile(payload)
    console.log({ updateProfile: result })

    if (result.success) {
      yield put(UserActions.updateProfileSuccess(result.user))
    } else {
      yield put(UserActions.updateProfileFailure(result.message))
    }
  } catch (error) {
    yield put(UserActions.updateProfileFailure(errorHandling(error)))
  }
}

export default updateProfile
