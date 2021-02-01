import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('registerFCMToken', ['token'], null, ['token'], ['error']),

  ...buildCommonActions('fetchNewNotifications', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchOldNotifications', null, null, ['result'], ['error']),

  ...buildCommonActions('makeNotificationSeen', ['id'], null, ['id'], ['error']),
})

export const NotificationTypes = Types

export default Creators
