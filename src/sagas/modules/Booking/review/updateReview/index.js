import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * UPDATE_REVIEW
 */
function* updateReview({ payload, callback }) {
  console.log('update review...')
  try {
    yield put(BookingActions.updateReviewLoading())
    const result = yield apis.updateReview(payload)
    console.log({ updateReview: result })

    if (result) {
      yield put(BookingActions.updateReviewSuccess())
      yield put(UserActions.fetchReview(result.id))
      if (callback) callback()
      yield put(BookingActions.fetchBooking({ id: result.booking_id }))
      yield put(OfficeActions.fetchRoom({ id: result.room_id }))
    } else {
      yield put(BookingActions.updateReviewFailure())
    }
  } catch (error) {
    yield put(BookingActions.updateReviewFailure(errorHandling(error)))
  }
}

export default updateReview
