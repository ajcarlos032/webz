import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * FETCH_ROOM
 */
function* fetchRoom({ payload }) {
  console.log('Fetching room...')
  console.log(payload)
  try {
    yield put(OfficeActions.fetchRoomLoading())
    const result = yield apis.fetchRoom(payload)
    console.log({ fetchRoom: result })

    yield put(OfficeActions.fetchRoomSuccess(result))
    yield put(UserActions.updateFavoriteRooms(result))
  } catch (error) {
    yield put(OfficeActions.fetchRoomFailure(errorHandling(error)))
  }
}

export default fetchRoom
