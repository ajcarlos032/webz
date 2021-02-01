/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UNLOCK_ROOM_FAILURE
 */
function* unlockRoomFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default unlockRoomFailure
