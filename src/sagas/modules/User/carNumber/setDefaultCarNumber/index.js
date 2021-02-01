import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * SET_DEFAULT_CAR_NUMBER
 */
function* setDefaultCarNumber({ id }) {
  console.log('Set default car number...')
  console.log({ id })
  try {
    yield put(UserActions.setDefaultCarNumberLoading())
    const result = yield apis.setDefaultCarNumber({ id })
    console.log({ setCardNumberDefault: result })

    if (result) {
      yield put(UserActions.setDefaultCarNumberSuccess(id))
    } else {
      yield put(UserActions.setDefaultCarNumberFailure('Something went wrong.'))
    }
  } catch (error) {
    yield put(UserActions.setDefaultCarNumberFailure(errorHandling(error)))
  }
}

export default setDefaultCarNumber
