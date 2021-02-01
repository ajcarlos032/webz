import { all, takeLatest } from 'redux-saga/effects'
import { NotificationTypes } from '@store/Notification/Actions'

import registerFCMToken from './registerFCMToken'
import fetchNewNotifications from './fetchNewNotifications'
import fetchOldNotifications from './fetchOldNotifications'
import makeNotificationSeen from './makeNotificationSeen'

export default function* root() {
  yield all([
    takeLatest(NotificationTypes.REGISTER_FCM_TOKEN, registerFCMToken),
    takeLatest(NotificationTypes.FETCH_NEW_NOTIFICATIONS, fetchNewNotifications),
    takeLatest(NotificationTypes.FETCH_OLD_NOTIFICATIONS, fetchOldNotifications),
    takeLatest(NotificationTypes.MAKE_NOTIFICATION_SEEN, makeNotificationSeen),
  ])
}
