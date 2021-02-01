import { put } from 'redux-saga/effects'

import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_REVIEW
 */
function* fetchReview({ id }) {
  console.log('Fetching review...')
  try {
    yield put(UserActions.fetchReviewLoading())
    const result = yield apis.fetchReview({ id })
    console.log({ fetchReview: result })
    yield put(UserActions.fetchReviewSuccess(result))
  } catch (error) {
    yield put(UserActions.fetchReviewFailure(errorHandling(error)))
  }
}

export default fetchReview
