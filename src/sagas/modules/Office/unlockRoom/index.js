import { put } from 'redux-saga/effects'

import OfficeActions from '@store/Office/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * UNLOCK_ROOM
 */
function* unlockRoom({ payload, callback }) {
  console.log('Unlocking room...')
  console.log(payload)
  try {
    yield put(OfficeActions.unlockRoomLoading())
    const result = yield apis.unlockRoom(payload)
    console.log({ unlockRoom: result })

    if (result) {
      yield put(OfficeActions.unlockRoomSuccess(result.message))
      if (callback) callback()
    } else {
      yield put(OfficeActions.unlockRoomSuccess(result.message))
    }
  } catch (error) {
    yield put(OfficeActions.unlockRoomFailure(errorHandling(error)))
  }
}

export default unlockRoom
