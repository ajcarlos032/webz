import { showToast, TYPE } from '@helpers/toast'
/**
 * MESSAGE_TO_SUPPORT_SUCCESS
 */
// eslint-disable-next-line require-yield
function* messageToSupportSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default messageToSupportSuccess
