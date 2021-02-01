import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import { errorHandling } from '@sagas/utils'

import AuthActions from '@store/Auth/Actions'
import UserActions from '@store/User/Actions'

import apis from '@apis'
import { APP_TOKEN_KEY } from '@root/constants'
/**
 * SIGN_UP
 */
function* signUp({ payload, callback }) {
  console.log('Signing up...')
  console.log(payload)
  try {
    yield put(AuthActions.signUpLoading())
    const result = yield apis.signup(payload)
    console.log({ signup: result })
    if (result.success) {
      AsyncStorage.setItem(APP_TOKEN_KEY, result.token ? `Bearer ${result.token}` : null)
      yield put(AuthActions.signUpSuccess())
      yield put(UserActions.setMe(result.user))
      if (callback) callback()
    } else {
      yield put(AuthActions.signUpFailure(result.message))
    }
  } catch (error) {
    yield put(AuthActions.signUpFailure(errorHandling(error)))
  }
}

export default signUp
