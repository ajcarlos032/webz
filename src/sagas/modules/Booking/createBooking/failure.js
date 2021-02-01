/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CREATE_BOOKING_FAILURE
 */
function* createBookingFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default createBookingFailure
