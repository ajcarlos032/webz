import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import { APP_TOKEN_KEY } from '@root/constants'
import AuthActions from '@store/Auth/Actions'
import UserActions from '@store/User/Actions'

/**
 * SIGN_OUT
 */
function* signOut() {
  try {
    AsyncStorage.removeItem(APP_TOKEN_KEY)
    yield put(AuthActions.signOutSuccess())
    yield put(UserActions.init())
  } catch (error) {
    yield put(AuthActions.signOutFailure('Something went wrong while signing out'))
  }
}

export default signOut
