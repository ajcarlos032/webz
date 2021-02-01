import { showToast, TYPE } from '@helpers/toast'
/**
 * CANCEL_BOOKING_SUCCESS
 */
// eslint-disable-next-line require-yield
function* cancelBookingSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default cancelBookingSuccess
