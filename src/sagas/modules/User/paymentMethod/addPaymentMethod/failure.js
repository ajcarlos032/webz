/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * ADD_PAYMENT_METHOD_FAILURE
 */
function* addPaymentMethodFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default addPaymentMethodFailure
