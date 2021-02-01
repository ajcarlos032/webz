/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * DELETE_CAR_NUMBER_FAILURE
 */
function* deleteCarNumberFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default deleteCarNumberFailure
