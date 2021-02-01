import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FAVORITE_ROOMS
 */
function* favoriteRooms() {
  console.log('Fetching favorite rooms...')
  try {
    yield put(OfficeActions.favoriteRoomsLoading())
    const result = yield apis.favoriteRooms()
    console.log({ favoriteRooms: result })
    yield put(OfficeActions.favoriteRoomsSuccess())
    yield put(UserActions.setFavoriteRooms(result))
  } catch (error) {
    yield put(OfficeActions.favoriteRoomsFailure(errorHandling(error)))
  }
}

export default favoriteRooms
