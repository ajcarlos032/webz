/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_ROOM_FAILURE
 */
function* fetchRoomFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchRoomFailure
