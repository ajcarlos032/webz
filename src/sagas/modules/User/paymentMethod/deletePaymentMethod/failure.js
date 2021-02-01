/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * DELETE_PAYMENT_METHOD_FAILURE
 */
function* deletePaymentMethodFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default deletePaymentMethodFailure
