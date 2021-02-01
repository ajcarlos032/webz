import { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppState, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import messaging from '@react-native-firebase/messaging'

import { notificationSelector } from '@store/Notification/Select'
import UserActions from '@store/User/Actions'
import NotificationActions from '@store/Notification/Actions'

import PushNotification from 'react-native-push-notification'
import NotificationHandler from './NotificationHandler'

import { BOOKING_STATUS, NOTIFICATION_BOOKING_STATE } from '@screens/MyBookings/shared/constants'

import { shouldRefetch } from '@helpers/utils'
import { DEEP_LINKING_SCHEMA, IS_IOS } from '@root/constants'

const NotificationService = ({ children }) => {
  const dispatch = useDispatch()
  const {
    notifications: { timestamp },
  } = useSelector(notificationSelector)

  // fetch notifications when app state changes
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        if (shouldRefetch(timestamp)) {
          dispatch(NotificationActions.fetchNewNotifications())
        }
        // Clear badge number at start
        PushNotification.getApplicationIconBadgeNumber((number) => {
          if (number > 0) PushNotification.setApplicationIconBadgeNumber(0)
        })

        PushNotification.getChannels((channels) => {
          console.log({ PushNotificationChannels: channels })
        })
      }
    }

    AppState.addEventListener('change', handleAppStateChange)

    return () => AppState.removeEventListener('change', handleAppStateChange)
  }, [timestamp, dispatch])

  useEffect(() => {
    // Android only
    if (IS_IOS) return

    PushNotification.createChannel(
      {
        channelDescription: 'A default channel of FCM',
        channelId: 'fcm_fallback_notification_channel',
        channelName: `WeBizFCMDefaultChannel`,
        importance: 2,
        vibrate: true,
      },
      (created) =>
        console.log(`Creating default channel: ${created ? 'Success' : 'Already exists'}`),
    )
  }, [])

  const registerFCMToken = useCallback(() => {
    const getToken = async () => {
      try {
        const token = await messaging().getToken()
        dispatch(NotificationActions.registerFCMToken(token))
        console.log({ FCMToken: token })
      } catch (error) {
        console.log({ FCMTokenError: error })
      }
    }
    getToken()
  }, [dispatch])

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      if (enabled) {
        console.log('FCM Authorization status:', authStatus)
        registerFCMToken()
      }
    }

    requestUserPermission()
  }, [registerFCMToken])

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage)
    })
  }, [])

  const updateBookingStatus = useCallback(
    (notificationType, id, action) => {
      const _action = (action || '').toLowerCase()
      if (
        notificationType === 'bookings' &&
        id &&
        [NOTIFICATION_BOOKING_STATE.COMPLETED, NOTIFICATION_BOOKING_STATE.STARTED].includes(_action)
      ) {
        let status
        let statusName
        if (_action === NOTIFICATION_BOOKING_STATE.COMPLETED) {
          status = BOOKING_STATUS.COMPLETED
          statusName = 'Completed'
        } else if (_action === NOTIFICATION_BOOKING_STATE.STARTED) {
          status = BOOKING_STATUS.ACTIVE
          statusName = 'Active'
        }
        dispatch(UserActions.updateBookingsStatus([id], status, statusName))
      }
    },
    [dispatch],
  )

  useEffect(() => {
    const onNotification = (notification) => {
      console.log({ notification })
      const { action, foreground, id, type, userInteraction } = notification

      // update booking status
      updateBookingStatus(type, id, action)

      if (foreground) {
        dispatch(NotificationActions.fetchNewNotifications())
      }

      if (userInteraction && type && id) {
        if (type === 'bookings' && action === NOTIFICATION_BOOKING_STATE.COMPLETED) {
          return
        }
        Linking.openURL(`${DEEP_LINKING_SCHEMA}/${type}/${id}`)
      }
    }
    NotificationHandler.attachNotification(onNotification)
  }, [updateBookingStatus, dispatch])

  return children
}

NotificationService.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NotificationService
