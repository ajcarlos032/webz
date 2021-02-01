import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_TRANSACTIONS
 */
function* fetchTransactions() {
  console.log('Fetching transactions...')
  try {
    yield put(UserActions.fetchTransactionsLoading())
    const result = yield apis.fetchTransactions()
    console.log({ fetchTransactions: result })

    yield put(UserActions.fetchTransactionsSuccess(result))
  } catch (error) {
    yield put(UserActions.fetchTransactionsFailure(errorHandling(error)))
  }
}

export default fetchTransactions
