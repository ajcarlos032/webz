import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * MESSAGE_TO_SUPPORT (create ticket)
 */
function* messageToSupport({ payload, callback }) {
  console.log('Sending message to support...')
  console.log(payload)
  try {
    yield put(UserActions.messageToSupportLoading())
    const result = yield apis.messageToSupport(payload)
    console.log({ messageToSupport: result })

    if (result.success) {
      yield put(UserActions.messageToSupportSuccess(payload.ticket_id ? null : result.message))
      if (callback) callback()
      // when create a initial ticket, load active tickets
      if (!payload.ticket_id) yield put(UserActions.ticketsActive())
    } else {
      yield put(UserActions.messageToSupportFailure(result.message))
    }
  } catch (error) {
    yield put(UserActions.messageToSupportFailure(errorHandling(error)))
  }
}

export default messageToSupport
