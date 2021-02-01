import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('init', null),

  ...buildCommonActions('setMe', ['me']),

  ...buildCommonActions('updateFavoritesCount', ['count']),

  ...buildCommonActions('setBookings', ['result']),

  ...buildCommonActions('updateBookings', ['booking']),

  ...buildCommonActions('updateBookingsStatus', ['bookingIds', 'status', 'statusName']),

  ...buildCommonActions('setFavoriteRooms', ['result']),

  ...buildCommonActions('updateFavoriteRooms', ['result']),

  ...buildCommonActions('updateFavoriteRoomsOnLike', ['result', 'hasAlreadyLiked']),

  ...buildCommonActions('updateLogos', ['result']),

  ...buildCommonActions('me', null, null, ['result'], ['error']),

  ...buildCommonActions('updateProfile', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('updatePassword', ['payload', 'callback'], null, ['message'], ['error']),

  ...buildCommonActions(
    'updatePhone',
    ['payload', 'callback'],
    null,
    ['message', 'phone'],
    ['error'],
  ),

  ...buildCommonActions('addCarNumber', ['payload', 'callback'], null, ['result'], ['error']),

  ...buildCommonActions('setDefaultCarNumber', ['id'], null, ['id'], ['error']),

  ...buildCommonActions('deleteCarNumber', ['id'], null, ['id'], ['error']),

  ...buildCommonActions('fetchReviews', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchReview', ['id'], null, ['review'], ['error']),

  ...buildCommonActions('updateReviews', ['review']),

  ...buildCommonActions('setTeams', ['result']),

  ...buildCommonActions('addTeam', ['result']),

  ...buildCommonActions('updateTeams', ['result']),

  ...buildCommonActions('messageToSupport', ['payload', 'callback'], null, ['message'], ['error']),

  ...buildCommonActions('ticketMessages', ['ticketId'], null, ['ticketId', 'result'], ['error']),

  ...buildCommonActions('ticketsActive', null, null, ['result'], ['error']),

  ...buildCommonActions('ticketsComplete', null, null, ['result'], ['error']),

  ...buildCommonActions('addCredits', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('fetchCredits', null, null, ['result'], ['error']),

  ...buildCommonActions('addPaymentMethod', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('fetchPaymentMethods', null, null, ['result'], ['error']),

  ...buildCommonActions('choosePaymentMethod', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('deletePaymentMethod', ['payload'], null, ['id'], ['error']),

  ...buildCommonActions('fetchTransactions', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchPackages', null, null, ['result'], ['error']),

  ...buildCommonActions('choosePackage', ['payload', 'callback'], null, ['result'], ['error']),
})

export const UserTypes = Types

export default Creators
