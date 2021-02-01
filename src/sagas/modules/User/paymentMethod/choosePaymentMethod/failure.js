/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CHOOSE_PAYMENT_METHOD_FAILURE
 */
function* choosePaymentMethodFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default choosePaymentMethodFailure
