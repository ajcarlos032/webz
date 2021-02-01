/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { NotificationTypes } from './Actions'

import {
  buildObjectFromArray,
  buildObjectFromObject,
  buildCommonState,
  buildCommonReducer,
} from '@store/utils'

// registerFCMToken

const registerFCMTokenLoading = (state) => ({
  ...state,
  ...buildCommonState('registerFCMToken', { loading: true }),
})

const registerFCMTokenSuccess = (state, { token }) => ({
  ...state,
  token,
  ...buildCommonState('registerFCMToken', { success: true }),
})

const registerFCMTokenFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('registerFCMToken', { failure: true, error }),
})

// fetchNewNotifications

const fetchNewNotificationsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchNewNotifications', { loading: true }),
})

const fetchNewNotificationsSuccess = (state, { result }) => {
  const ids = result.map(({ id }) => id)
  ids.sort((a, b) => b - a)

  const notifications = {
    data: { ...state.notifications.data, ...buildObjectFromArray(result, 'notification') },
    ids: { new: ids, old: state.notifications.ids.old },
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    notifications,
    ...buildCommonState('fetchNewNotifications', { success: true }),
  }
}

const fetchNewNotificationsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchNewNotifications', { failure: true, error }),
  }
}

// fetchOldNotifications

const fetchOldNotificationsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchOldNotifications', { loading: true }),
})

const fetchOldNotificationsSuccess = (state, { result }) => {
  const ids = result.map(({ id }) => id)
  ids.sort((a, b) => b - a)

  const notifications = {
    data: { ...state.notifications.data, ...buildObjectFromArray(result, 'notification') },
    ids: { new: state.notifications.ids.new, old: ids },
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    notifications,
    ...buildCommonState('fetchOldNotifications', { success: true }),
  }
}

const fetchOldNotificationsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchOldNotifications', { failure: true, error }),
  }
}

// makeNotificationSeen

const makeNotificationSeenLoading = (state) => ({
  ...state,
  ...buildCommonState('makeNotificationSeen', { loading: true }),
})

const makeNotificationSeenSuccess = (state, { id }) => {
  const newIds = state.notifications.ids.new.filter((_id) => _id !== id) // has not seen

  const oldIds = state.notifications.ids.old.filter((_id) => _id !== id) // has seen
  oldIds.push(id)
  oldIds.sort((a, b) => b - a)

  const notification = state.notifications.data[`notification_${id}`]
  notification.seen = true

  const notifications = {
    ...state.notifications,
    data: {
      ...state.notifications.data,
      ...buildObjectFromObject(notification, 'notification'),
    },
    ids: { new: newIds, old: oldIds },
  }

  return {
    ...state,
    notifications,
    ...buildCommonState('makeNotificationSeen', { success: true }),
  }
}

const makeNotificationSeenFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('makeNotificationSeen', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(NotificationTypes, {
    registerFCMTokenLoading,
    registerFCMTokenSuccess,
    registerFCMTokenFailure,

    fetchNewNotificationsLoading,
    fetchNewNotificationsSuccess,
    fetchNewNotificationsFailure,

    fetchOldNotificationsLoading,
    fetchOldNotificationsSuccess,
    fetchOldNotificationsFailure,

    makeNotificationSeenLoading,
    makeNotificationSeenSuccess,
    makeNotificationSeenFailure,
  }),
})
