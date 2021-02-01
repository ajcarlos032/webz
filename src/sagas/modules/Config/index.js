import { all, takeLatest } from 'redux-saga/effects'
import { ConfigTypes } from '@store/Config/Actions'

import changeLanguage from './changeLanguage'
import acceptLocationUsage from './acceptLocationUsage'

export default function* root() {
  yield all([
    // Change language.
    takeLatest(ConfigTypes.CHANGE_LANGUAGE, changeLanguage),
    takeLatest(ConfigTypes.ACCEPT_LOCATION, acceptLocationUsage),
  ])
}
