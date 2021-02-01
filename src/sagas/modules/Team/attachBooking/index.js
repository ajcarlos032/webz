import { put } from 'redux-saga/effects'

import TeamActions from '@store/Team/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * ATTACH_BOOKING
 */
function* attachBooking({ payload, callback }) {
  console.log('attach booking...')
  console.log(payload)
  try {
    yield put(TeamActions.attachBookingLoading())
    const result = yield apis.attachBookingToTeam(payload)
    console.log({ attachBooking: result })

    if (result) {
      yield put(TeamActions.attachBookingSuccess())
      yield put(UserActions.updateTeams(result))
      if (callback) callback()
    } else {
      yield put(TeamActions.attachBookingFailure())
    }
  } catch (error) {
    yield put(TeamActions.attachBookingFailure(errorHandling(error)))
  }
}

export default attachBooking
