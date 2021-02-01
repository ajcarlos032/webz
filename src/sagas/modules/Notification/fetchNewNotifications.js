import { put } from 'redux-saga/effects'

import NotificationActions from '@store/Notification/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_NEW_NOTIFICATIONS
 */
function* fetchNewNotifications() {
  console.log(`Fetching new notifications...`)
  try {
    yield put(NotificationActions.fetchNewNotificationsLoading())
    const result = yield apis.fetchNotifications({ seen: false })
    console.log({ fetchNewNotifications: result })
    yield put(NotificationActions.fetchNewNotificationsSuccess(result))
  } catch (error) {
    yield put(NotificationActions.fetchNewNotificationsFailure(errorHandling(error)))
  }
}

export default fetchNewNotifications
