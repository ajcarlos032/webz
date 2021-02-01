/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_CREDITS_FAILURE
 */
function* fetchCreditsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchCreditsFailure
