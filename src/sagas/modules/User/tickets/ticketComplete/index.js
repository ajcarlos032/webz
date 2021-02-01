import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * TICKETS_COMPLETE
 */
function* ticketsComplete() {
  console.log('Fetching completed tickets...')
  try {
    yield put(UserActions.ticketsCompleteLoading())
    const result = yield apis.ticketsComplete()
    console.log({ ticketsComplete: result })

    yield put(UserActions.ticketsCompleteSuccess(result))
  } catch (error) {
    yield put(UserActions.ticketsCompleteFailure(errorHandling(error)))
  }
}

export default ticketsComplete
