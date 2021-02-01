import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_REVIEW_SUCCESS
 */
// eslint-disable-next-line require-yield
function* updateReviewSuccess() {
  showToast('Success', TYPE.SUCCESS)
}

export default updateReviewSuccess
