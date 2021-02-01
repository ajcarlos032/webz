import { put } from 'redux-saga/effects'

import BookingActions from '@store/Booking/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CHECK_ROOM_EXTENDABLE
 */
function* checkRoomExtendable({ payload, callback }) {
  console.log('checkRoomExtendable...')
  console.log(payload)
  try {
    yield put(BookingActions.checkRoomExtendableLoading())
    const result = yield apis.checkRoomExtendable({ id: payload.roomId })
    console.log({ result })

    if (Boolean(result.id)) {
      yield put(BookingActions.checkRoomExtendableSuccess())
      if (callback) callback()
      yield put(BookingActions.continueBooking({ id: payload.bookingId }))
    } else {
      yield put(BookingActions.checkRoomExtendableFailure())
    }
  } catch (error) {
    yield put(BookingActions.checkRoomExtendableFailure(errorHandling(error)))
  }
}

export default checkRoomExtendable
