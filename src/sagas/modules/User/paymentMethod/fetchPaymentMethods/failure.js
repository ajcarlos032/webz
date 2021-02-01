/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_PAYMENT_METHODS_FAILURE
 */
function* fetchPaymentMethodsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchPaymentMethodsFailure
