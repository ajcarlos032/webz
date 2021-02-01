/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * ADD_CREDITS_FAILURE
 */
function* addCreditsFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default addCreditsFailure
