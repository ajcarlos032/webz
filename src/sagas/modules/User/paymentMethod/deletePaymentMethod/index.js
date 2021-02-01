import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * DELETE_PAYMENT_METHOD
 */
function* deletePaymentMethod({ payload }) {
  console.log('Deleting payment method...')
  console.log({ payload })
  try {
    yield put(UserActions.deletePaymentMethodLoading())
    const result = yield apis.deletePaymentMethod(payload)
    console.log({ deletePaymentMethod: result })

    if (result) {
      yield put(UserActions.deletePaymentMethodSuccess(payload.method_id))
    } else {
      yield put(UserActions.deletePaymentMethodFailure())
    }
  } catch (error) {
    yield put(UserActions.deletePaymentMethodFailure(errorHandling(error)))
  }
}

export default deletePaymentMethod
