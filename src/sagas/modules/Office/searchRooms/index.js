import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * SEARCH_ROOM
 */
function* searchRooms({ payload }) {
  console.log('Searching rooms...')
  console.log(payload)
  try {
    yield put(OfficeActions.searchRoomsLoading())
    const result = yield apis.searchRooms(payload)
    console.log({ searchRooms: result })

    yield put(OfficeActions.searchRoomsSuccess(result))
    if (payload?.name) {
      yield put(OfficeActions.saveSearch(payload.name))
    }
  } catch (error) {
    yield put(OfficeActions.searchRoomsFailure(errorHandling(error)))
  }
}

export default searchRooms
