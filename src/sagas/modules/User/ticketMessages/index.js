import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * TICKET_MESSAGES
 */
function* ticketMessages({ ticketId }) {
  console.log('Fetching ticket messages...')
  console.log({ ticketId })
  try {
    yield put(UserActions.ticketMessagesLoading())
    const result = yield apis.ticketMessages({ id: ticketId })
    console.log({ ticketMessages: result })

    yield put(UserActions.ticketMessagesSuccess(ticketId, result))
  } catch (error) {
    yield put(UserActions.ticketMessagesFailure(errorHandling(error)))
  }
}

export default ticketMessages
