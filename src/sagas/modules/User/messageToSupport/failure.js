/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * MESSAGE_TO_SUPPORT_FAILURE
 */
function* messageToSupportFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default messageToSupportFailure
