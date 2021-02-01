import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_CREDITS
 */
function* fetchCredits() {
  console.log('Fetching credits...')
  try {
    yield put(UserActions.fetchCreditsLoading())
    const result = yield apis.fetchCredits()
    console.log({ fetchCredits: result })

    yield put(UserActions.fetchCreditsSuccess(result))
  } catch (error) {
    yield put(UserActions.fetchCreditsFailure(errorHandling(error)))
  }
}

export default fetchCredits
