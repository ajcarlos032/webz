/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_TRANSACTIONS_FAILURE
 */
function* fetchTransactionsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchTransactionsFailure
