/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * LOG_IN_FAILURE
 */
function* logInFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default logInFailure
