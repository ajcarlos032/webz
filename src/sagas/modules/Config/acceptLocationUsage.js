import { put } from 'redux-saga/effects'
import ConfigActions from '@store/Config/Actions'

/**
 * ACCEPT_LOCATION
 */
function* acceptLocationUsage() {
  try {
    yield put(ConfigActions.acceptLocationLoading())
    yield put(ConfigActions.acceptLocationSuccess())
  } catch (error) {
    yield put(ConfigActions.acceptLocationFailure())
  }
}

export default acceptLocationUsage
