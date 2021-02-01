/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * VERIFICATION_CODE_FOR_RESTORE_FAILURE
 */
function* verificationCodeForRestoreFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default verificationCodeForRestoreFailure
