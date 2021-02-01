/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * SET_NEW_PASSWORD_FAILURE
 */
function* setNewPasswordFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default setNewPasswordFailure
