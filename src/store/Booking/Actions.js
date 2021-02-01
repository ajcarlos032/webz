import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('fetchBookings', null, null, null, ['error']),

  ...buildCommonActions('fetchBooking', ['payload'], null, null, ['error']),

  ...buildCommonActions('createBooking', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('cancelBooking', ['payload', 'callback'], null, ['message'], ['error']),

  ...buildCommonActions('continueBooking', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('completeBooking', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('completeBookingNotify', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('completeAllBookings', ['callback'], null, null, ['error']),

  ...buildCommonActions('uploadLogos', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('bookingUseLogo', ['payload'], null, null, ['error']),

  ...buildCommonActions('createReview', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('updateReview', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('locationState', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('checkRoomExtendable', ['payload', 'callback'], null, null, ['error']),
})

export const BookingTypes = Types

export default Creators
