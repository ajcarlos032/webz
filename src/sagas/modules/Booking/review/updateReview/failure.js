/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UPDATE_REVIEW_FAILURE
 */
function* updateReviewFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default updateReviewFailure
