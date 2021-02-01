import { put } from 'redux-saga/effects'

import NotificationActions from '@store/Notification/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * MAKE_NOTIFICATION_SEEN
 */
function* makeNotificationSeen({ id }) {
  console.log('Make notification seen...')
  try {
    yield put(NotificationActions.makeNotificationSeenLoading())
    const result = yield apis.makeNotificationSeen(id)
    console.log({ makeNotificationSeen: result })
    if (result) {
      yield put(NotificationActions.makeNotificationSeenSuccess(id))
    } else {
      yield put(NotificationActions.makeNotificationSeenFailure('Something went wrong'))
    }
  } catch (error) {
    yield put(NotificationActions.makeNotificationSeenFailure(errorHandling(error)))
  }
}

export default makeNotificationSeen
