import { showToast, TYPE } from '@helpers/toast'
/**
 * UPLOAD_LOGOS_SUCCESS
 */
// eslint-disable-next-line require-yield
function* uploadLogosSuccess() {
  showToast('Success', TYPE.SUCCESS)
}

export default uploadLogosSuccess
