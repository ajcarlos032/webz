import { put } from 'redux-saga/effects'

import NotificationActions from '@store/Notification/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_OLD_NOTIFICATIONS
 */
function* fetchOldNotifications() {
  console.log(`Fetching old notifications...`)
  try {
    yield put(NotificationActions.fetchOldNotificationsLoading())
    const result = yield apis.fetchNotifications({ seen: true })
    console.log({ fetchOldNotifications: result })
    yield put(NotificationActions.fetchOldNotificationsSuccess(result))
  } catch (error) {
    yield put(NotificationActions.fetchOldNotificationsFailure(errorHandling(error)))
  }
}

export default fetchOldNotifications
