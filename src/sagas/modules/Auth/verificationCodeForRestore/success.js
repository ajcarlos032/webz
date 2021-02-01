import { showToast, TYPE } from '@helpers/toast'
/**
 * VERIFICATION_CODE_FOR_RESTORE_SUCCESS
 */
// eslint-disable-next-line require-yield
function* verificationCodeForRestoreSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default verificationCodeForRestoreSuccess
