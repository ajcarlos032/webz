import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * ADD_PAYMENT_METHOD
 */
function* addPaymentMethod({ payload }) {
  console.log('Adding payment methods...')
  console.log({ payload })
  try {
    yield put(UserActions.addPaymentMethodLoading())
    const result = yield apis.addPaymentMethod(payload)
    console.log({ addPaymentMethods: result })

    if (result) {
      yield put(UserActions.addPaymentMethodSuccess(result))
    } else {
      yield put(UserActions.addPaymentMethodFailure())
    }
  } catch (error) {
    yield put(UserActions.addPaymentMethodFailure(errorHandling(error)))
  }
}

export default addPaymentMethod
