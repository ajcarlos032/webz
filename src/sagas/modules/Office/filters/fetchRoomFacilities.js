import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * FETCH_ROOM_FACILITIES
 */
function* fetchRoomFacilities() {
  console.log('Fetching room Facilities...')
  try {
    yield put(OfficeActions.fetchRoomFacilitiesLoading())
    const result = yield apis.fetchRoomFacilities()
    console.log({ result })

    yield put(OfficeActions.fetchRoomFacilitiesSuccess(result))
  } catch (error) {
    yield put(OfficeActions.fetchRoomFacilitiesFailure(errorHandling(error)))
  }
}

export default fetchRoomFacilities
