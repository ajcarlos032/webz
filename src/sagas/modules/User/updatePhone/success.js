import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PHONE_SUCCESS
 */
// eslint-disable-next-line require-yield
function* updatePhoneSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default updatePhoneSuccess
