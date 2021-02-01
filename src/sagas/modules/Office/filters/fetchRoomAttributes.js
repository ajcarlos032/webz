import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * FETCH_ROOM_ATTRIBUTES
 */
function* fetchRoomAttributes() {
  console.log('Fetching room attributes...')
  try {
    yield put(OfficeActions.fetchRoomAttributesLoading())
    const result = yield apis.fetchRoomAttributes()
    console.log({ result })

    yield put(OfficeActions.fetchRoomAttributesSuccess(result))
  } catch (error) {
    yield put(OfficeActions.fetchRoomAttributesFailure(errorHandling(error)))
  }
}

export default fetchRoomAttributes
