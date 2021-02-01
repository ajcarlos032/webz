import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CREATE_REVIEW
 */
function* createReview({ payload, callback }) {
  console.log('create review...')
  console.log(payload)
  try {
    yield put(BookingActions.createReviewLoading())
    const result = yield apis.createReview(payload)
    console.log({ createReview: result })

    if (result) {
      yield put(BookingActions.createReviewSuccess())
      yield put(UserActions.fetchReview(result.id))
      if (callback) callback()
      yield put(BookingActions.fetchBooking({ id: result.booking_id }))
      yield put(OfficeActions.fetchRoom({ id: result.room_id }))
    } else {
      yield put(BookingActions.createReviewFailure())
    }
  } catch (error) {
    yield put(BookingActions.createReviewFailure(errorHandling(error)))
  }
}

export default createReview
