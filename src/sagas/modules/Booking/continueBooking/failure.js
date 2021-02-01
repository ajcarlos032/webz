/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CONTINUE_BOOKING_FAILURE
 */
function* continueBookingFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default continueBookingFailure
