export const notificationSelector = (state) => state.notification

export const notificationsSelector = (state) => state.notification.notifications.data
export const newNotificationIdsSelector = (state) => state.notification.notifications.ids.new
export const oldNotificationIdsSelector = (state) => state.notification.notifications.ids.old
export const notificationByIdSelector = (id) => (state) =>
  state.notification.notifications.data[`notification_${id}`]
