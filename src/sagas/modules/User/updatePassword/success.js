import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PASSWORD_SUCCESS
 */
// eslint-disable-next-line require-yield
function* updatePasswordSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default updatePasswordSuccess
