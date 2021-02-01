import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import AuthActions from '@store/Auth/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { APP_TOKEN_KEY } from '@root/constants'

import { errorHandling } from '@sagas/utils'

/**
 * LOG_IN
 */
function* logIn({ payload, method, callback }) {
  console.log('Signing in...')
  console.log({ method })
  try {
    yield put(AuthActions.logInLoading())
    const result = yield apis.logIn(payload, method)
    console.log({ login: result })
    if (result.success) {
      if (callback) callback()
      AsyncStorage.setItem(APP_TOKEN_KEY, result.token ? `Bearer ${result.token}` : null)
      yield put(AuthActions.logInSuccess())
      yield put(UserActions.setMe(result.user))
    } else {
      yield put(AuthActions.logInFailure(result.message))
    }
  } catch (error) {
    console.log(error)
    yield put(AuthActions.logInFailure(errorHandling(error)))
  }
}

export default logIn
