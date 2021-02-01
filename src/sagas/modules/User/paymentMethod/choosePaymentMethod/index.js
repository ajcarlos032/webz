import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * CHOOSE_PAYMENT_METHOD
 */
function* choosePaymentMethod({ payload }) {
  console.log('Choosing payment method...')
  console.log({ payload })
  try {
    yield put(UserActions.choosePaymentMethodLoading())
    const result = yield apis.choosePaymentMethod(payload)
    console.log({ choosePaymentMethod: result })

    if (result) {
      yield put(UserActions.choosePaymentMethodSuccess(result))
    } else {
      yield put(UserActions.choosePaymentMethodFailure())
    }
  } catch (error) {
    yield put(UserActions.choosePaymentMethodFailure(errorHandling(error)))
  }
}

export default choosePaymentMethod
