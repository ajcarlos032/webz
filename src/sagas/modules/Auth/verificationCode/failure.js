/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * VERIFICATION_CODE_FAILURE
 */
function* verificationCodeFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default verificationCodeFailure
