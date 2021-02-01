/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_ROOMS_FAILURE
 */
function* fetchRoomsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchRoomsFailure
