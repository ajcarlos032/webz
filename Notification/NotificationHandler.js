/* eslint-disable class-methods-use-this */
import { Linking } from 'react-native'
import PushNotification from 'react-native-push-notification'

import { NOTIFICATION_BOOKING_STATE } from '@screens/MyBookings/shared/constants'
import { DEEP_LINKING_SCHEMA } from '@root/constants'

class NotificationHandler {
  onNotification(notification) {
    console.log('NotificationHandler:', notification)

    const {
      foreground,
      userInteraction,
      data: { action, id, type },
    } = notification

    if (typeof this._onNotification === 'function') {
      this._onNotification({ action, foreground, id, type, userInteraction })
    } else if (userInteraction && type && id) {
      if (type === 'bookings' && action === NOTIFICATION_BOOKING_STATE.COMPLETED) {
        return
      }
      Linking.openURL(`${DEEP_LINKING_SCHEMA}/${type}/${id}`)
    }
  }

  onAction(notification) {
    if (notification.action === 'Yes') PushNotification.invokeApp(notification)
  }

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError(err) {
    console.log({ onRegistrationError: err })
  }

  attachNotification(handler) {
    this._onNotification = handler
  }
}

const handler = new NotificationHandler()

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: handler.onNotification.bind(handler),

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: handler.onRegistrationError.bind(handler),

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true,
})

export default handler
