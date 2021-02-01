/* eslint-disable sort-keys */
import { DEEP_LINKING_SCHEMA } from '@root/constants'

export default {
  prefixes: [`${DEEP_LINKING_SCHEMA}`, 'webiz://'],
  config: {
    screens: {
      Notifications: 'notifications',
      TabNavigator: {
        screens: {
          MyBookings: {
            path: 'bookings',
            initialRouteName: 'Bookings',
            screens: {
              ActiveBookingRoom: '/:id',
            },
          },
          Offices: {
            path: 'rooms',
            initialRouteName: 'Rooms',
            screens: {
              Room: '/:id',
            },
          },
        },
      },
      RestorePassword: {
        path: 'password/restore',
        screens: {
          RestoreForm: '/:token',
        },
      },
    },
  },
}
