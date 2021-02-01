import { put } from 'redux-saga/effects'

import NotificationActions from '@store/Notification/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * REGISTER_FCM_TOKEN
 */
function* registerFCMToken({ token }) {
  console.log('Registering FCM token...', token)
  try {
    yield put(NotificationActions.registerFCMTokenLoading())
    const result = yield apis.registerFCMToken(token)
    console.log({ registerFCMToken: result })
    yield put(NotificationActions.registerFCMTokenSuccess(token))
  } catch (error) {
    yield put(NotificationActions.registerFCMTokenFailure(errorHandling(error)))
  }
}

export default registerFCMToken
