/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * ATTACH_BOOKING_FAILURE
 */
function* attachBookingFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default attachBookingFailure
