import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  ...buildCommonState('fetchBookings'),
  ...buildCommonState('fetchBooking'),
  ...buildCommonState('createBooking'),
  ...buildCommonState('cancelBooking'),
  ...buildCommonState('continueBooking'),
  ...buildCommonState('completeBooking'),
  ...buildCommonState('completeBookingNotify'),
  ...buildCommonState('completeAllBookings'),
  ...buildCommonState('uploadLogos'),
  ...buildCommonState('bookingUseLogo'),
  ...buildCommonState('createReview'),
  ...buildCommonState('updateReview'),
  ...buildCommonState('locationState'),
  ...buildCommonState('checkRoomExtendable'),
}
