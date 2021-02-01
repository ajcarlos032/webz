/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PASSWORD_FAILURE
 */
function* updatePasswordFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default updatePasswordFailure
