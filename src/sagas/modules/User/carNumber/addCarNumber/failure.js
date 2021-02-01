/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * ADD_CAR_NUMBER_FAILURE
 */
function* addCarNumberFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default addCarNumberFailure
