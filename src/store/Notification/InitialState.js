/* eslint-disable sort-keys */
import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  token: null,

  notifications: {
    data: {},
    ids: {
      new: [],
      old: [],
    },
    timestamp: null,
  },

  ...buildCommonState('registerFCMToken'),
  ...buildCommonState('fetchNewNotification'),
  ...buildCommonState('fetchOldNotifications'),
  ...buildCommonState('makeNotificationSeen'),
}
