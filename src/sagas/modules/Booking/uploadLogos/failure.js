/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * UPLOAD_LOGOS_FAILURE
 */
function* uploadLogosFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default uploadLogosFailure
