/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CANCEL_BOOKING_FAILURE
 */
function* cancelBookingFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default cancelBookingFailure
