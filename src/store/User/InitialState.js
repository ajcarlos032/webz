/* eslint-disable sort-keys */
import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  me: {},
  bookings: {
    data: {},
    ids: [],
    timestamp: null,
  },

  favoriteRooms: {
    data: {},
    ids: [],
    timestamp: null,
  },

  reviews: {
    data: {},
    ids: [],
    timestamp: null,
  },

  teams: {
    data: {},
    ids: [],
    timestamp: null,
  },

  tickets: {
    data: {},
    ids: {
      active: [],
      completed: [],
    },
    timestamp: null,
  },

  credits: [],
  paymentMethods: [],
  transactions: [],
  packages: [],

  ...buildCommonState('me'),
  ...buildCommonState('updateProfile'),
  ...buildCommonState('updatePassword'),
  ...buildCommonState('updatePhone'),
  ...buildCommonState('addCarNumber'),
  ...buildCommonState('setDefaultCarNumber'),
  ...buildCommonState('deleteCarNumber'),
  ...buildCommonState('fetchReviews'),
  ...buildCommonState('fetchReview'),
  ...buildCommonState('messageToSupport'),
  ...buildCommonState('ticketMessages'),
  ...buildCommonState('ticketsActive'),
  ...buildCommonState('ticketsComplete'),
  ...buildCommonState('addCredits'),
  ...buildCommonState('fetchCredits'),
  ...buildCommonState('addPaymentMethod'),
  ...buildCommonState('fetchPaymentMethods'),
  ...buildCommonState('fetchTransactions'),
  ...buildCommonState('choosePaymentMethod'),
  ...buildCommonState('deletePaymentMethod'),
  ...buildCommonState('fetchPackages'),
  ...buildCommonState('choosePackage'),
}
