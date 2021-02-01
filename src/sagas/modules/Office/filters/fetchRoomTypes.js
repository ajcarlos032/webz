import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * FETCH_ROOM_TYPES
 */
function* fetchRoomTypes() {
  console.log('Fetching room Types...')
  try {
    yield put(OfficeActions.fetchRoomTypesLoading())
    const result = yield apis.fetchRoomTypes()
    console.log({ result })

    yield put(OfficeActions.fetchRoomTypesSuccess(result))
  } catch (error) {
    yield put(OfficeActions.fetchRoomTypesFailure(errorHandling(error)))
  }
}

export default fetchRoomTypes
