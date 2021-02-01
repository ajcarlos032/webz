/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PHONE_FAILURE
 */
function* updatePhoneFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default updatePhoneFailure
