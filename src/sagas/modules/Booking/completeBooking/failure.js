/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * COMPLETE_BOOKING_FAILURE
 */
function* completeBookingFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default completeBookingFailure
