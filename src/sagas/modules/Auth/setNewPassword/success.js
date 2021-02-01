import { showToast, TYPE } from '@helpers/toast'
/**
 * SET_NEW_PASSWORD_SUCCESS
 */
// eslint-disable-next-line require-yield
function* setNewPasswordSuccess({ message }) {
  showToast(message, TYPE.SUCCESS)
}

export default setNewPasswordSuccess
