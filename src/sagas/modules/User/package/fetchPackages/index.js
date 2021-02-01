import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_PACKAGES
 */
function* fetchPackages() {
  console.log('Fetching packages...')
  try {
    yield put(UserActions.fetchPackagesLoading())
    const result = yield apis.packages()
    console.log({ fetchPackages: result })

    if (result) {
      yield put(UserActions.fetchPackagesSuccess(result))
    } else {
      yield put(UserActions.fetchPackagesFailure('Something went wrong.'))
    }
  } catch (error) {
    yield put(UserActions.fetchPackagesFailure(errorHandling(error)))
  }
}

export default fetchPackages
