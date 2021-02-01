import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_PROFILE_SUCCESS
 */
// eslint-disable-next-line require-yield
function* updateProfileSuccess() {
  showToast('Successfully updated', TYPE.SUCCESS)
}

export default updateProfileSuccess
