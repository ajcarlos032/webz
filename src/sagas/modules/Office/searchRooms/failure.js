/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * SEARCH_ROOMS_FAILURE
 */
function* searchRoomsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default searchRoomsFailure
