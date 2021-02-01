/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * SIGN_UP_FAILURE
 */
function* signUpFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default signUpFailure
