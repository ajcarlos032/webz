/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UNLOCK_ROOM_SUCCESS
 */

function* unlockRoomSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default unlockRoomSuccess
