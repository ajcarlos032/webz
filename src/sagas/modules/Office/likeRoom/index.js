import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * LIKE_ROOM
 */
function* likeRoom({ room_id, hasAlreadyLiked }) {
  console.log('like room...')
  try {
    yield put(OfficeActions.likeRoomLoading())
    const result = yield apis.likeRoom({ room_id })
    console.log({ result })

    if (result) {
      yield put(OfficeActions.likeRoomSuccess(result))
      yield put(UserActions.updateFavoriteRoomsOnLike(result, hasAlreadyLiked))
    } else {
      yield put(OfficeActions.likeRoomFailure())
    }
  } catch (error) {
    yield put(OfficeActions.likeRoomFailure(errorHandling(error)))
  }
}

export default likeRoom
