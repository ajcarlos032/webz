import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import { APP_LANG_KEY } from '@root/constants'

import ConfigActions from '@store/Config/Actions'
/**
 * CHANGE_LANGUAGE
 */
function* changeLanguage({ newLang, callback }) {
  try {
    yield put(ConfigActions.changeLanguageLoading())
    AsyncStorage.setItem(APP_LANG_KEY, newLang)
    yield put(ConfigActions.changeLanguageSuccess(newLang))
    if (callback) callback()
  } catch (error) {
    console.log({ error })
    yield put(ConfigActions.changeLanguageFailure())
  }
}

export default changeLanguage
