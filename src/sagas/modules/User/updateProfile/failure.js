/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PROFILE_FAILURE
 */
function* updateProfileFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default updateProfileFailure
