import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * ADD_CREDITS
 */
function* addCredits({ payload }) {
  console.log('Adding credits...')
  console.log({ payload })
  try {
    yield put(UserActions.addCreditsLoading())
    const result = yield apis.addCredits(payload)
    console.log({ addCredits: result })

    if (result) {
      yield put(UserActions.addCreditsSuccess(result))
    } else {
      yield put(UserActions.addCreditsFailure())
    }
  } catch (error) {
    yield put(UserActions.addCreditsFailure(errorHandling(error)))
  }
}

export default addCredits
