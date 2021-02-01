import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * CHOOSE_PACKAGE
 */
function* choosePackage({ payload, callback }) {
  console.log(`Choosing package...`)
  console.log({ payload })
  try {
    yield put(UserActions.choosePackageLoading())
    const result = yield apis.choosePackage(payload)
    console.log({ choosePackage: result })

    if (result) {
      yield put(UserActions.choosePackageSuccess(result))
      if (callback) callback()
    } else {
      yield put(UserActions.choosePackageFailure('Something went wrong.'))
    }
  } catch (error) {
    yield put(UserActions.choosePackageFailure(errorHandling(error)))
  }
}

export default choosePackage
