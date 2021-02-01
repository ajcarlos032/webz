import { showToast, TYPE } from '@helpers/toast'
/**
 * CREATE_REVIEW_SUCCESS
 */
// eslint-disable-next-line require-yield
function* createReviewSuccess() {
  showToast('Success', TYPE.SUCCESS)
}

export default createReviewSuccess
