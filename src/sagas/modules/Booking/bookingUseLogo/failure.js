/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * BOOKING_USE_LOGO_FAILURE
 */
function* bookingUseLogoFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default bookingUseLogoFailure
