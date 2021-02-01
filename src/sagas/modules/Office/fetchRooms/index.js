import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * FETCH_ROOMS
 */
function* fetchRooms({ payload }) {
  console.log('Fetching rooms...')
  console.log(payload)
  try {
    yield put(OfficeActions.fetchRoomsLoading())
    const result = yield apis.fetchRooms(payload)
    console.log({ fetchRooms: result })

    yield put(OfficeActions.fetchRoomsSuccess(result))
  } catch (error) {
    yield put(OfficeActions.fetchRoomsFailure(errorHandling(error)))
  }
}

export default fetchRooms
