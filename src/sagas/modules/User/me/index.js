import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * ME
 */
function* me() {
  console.log('Fetching me...')
  try {
    yield put(UserActions.meLoading())
    const result = yield apis.me()
    console.log({ me: result })
    yield put(UserActions.meSuccess(result))
  } catch (error) {
    yield put(UserActions.meFailure(errorHandling(error)))
  }
}

export default me
