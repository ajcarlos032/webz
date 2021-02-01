import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_REVIEWS
 */
function* fetchReviews() {
  console.log('Fetching reviews...')
  try {
    yield put(UserActions.fetchReviewsLoading())
    const result = yield apis.fetchReviews()
    console.log({ fetchReviews: result })
    yield put(UserActions.fetchReviewsSuccess(result))
  } catch (error) {
    yield put(UserActions.fetchReviewsFailure(errorHandling(error)))
  }
}

export default fetchReviews
