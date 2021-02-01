/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CREATE_REVIEW_FAILURE
 */
function* createReviewFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default createReviewFailure
