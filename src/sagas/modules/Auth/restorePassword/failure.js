/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * RESTORE_PASSWORD_FAILURE
 */
function* restorePasswordFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default restorePasswordFailure
