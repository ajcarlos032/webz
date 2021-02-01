import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_PAYMENT_METHODS
 */
function* fetchPaymentMethods() {
  console.log('Fetching payment methods...')
  try {
    yield put(UserActions.fetchPaymentMethodsLoading())
    const result = yield apis.fetchPaymentMethods()
    console.log({ fetchPaymentMethods: result })

    yield put(UserActions.fetchPaymentMethodsSuccess(result))
  } catch (error) {
    yield put(UserActions.fetchPaymentMethodsFailure(errorHandling(error)))
  }
}

export default fetchPaymentMethods
