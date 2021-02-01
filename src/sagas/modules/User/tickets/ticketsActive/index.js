import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * TICKETS_ACTIVE
 */
function* ticketsActive() {
  console.log('Fetching active tickets...')
  try {
    yield put(UserActions.ticketsActiveLoading())
    const result = yield apis.ticketsActive()
    console.log({ ticketsActive: result })

    yield put(UserActions.ticketsActiveSuccess(result))
  } catch (error) {
    yield put(UserActions.ticketsActiveFailure(errorHandling(error)))
  }
}

export default ticketsActive
