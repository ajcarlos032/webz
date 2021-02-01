import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import AuthActions from '@store/Auth/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'
import { APP_TOKEN_KEY } from '@root/constants'
/**
 * SET_NEW_PASSWORD
 */
function* setNewPassword({ payload }) {
  console.log('Restoring password...')
  console.log(payload)
  try {
    yield put(AuthActions.setNewPasswordLoading())
    const result = yield apis.setNewPassword(payload)
    console.log({ setNewPassword: result })
    if (result.success) {
      yield put(AuthActions.setNewPasswordSuccess(result.message))
      AsyncStorage.setItem(APP_TOKEN_KEY, result.token ? `Bearer ${result.token}` : null)
      yield put(AuthActions.logInSuccess())
      yield put(UserActions.setMe(result.user))
    } else {
      yield put(AuthActions.setNewPasswordFailure(result.message))
    }
  } catch (error) {
    yield put(AuthActions.setNewPasswordFailure(errorHandling(error)))
  }
}

export default setNewPassword
