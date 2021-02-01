/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * SET_DEFAULT_CAR_NUMBER_FAILURE
 */
function* setDefaultCarNumberFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default setDefaultCarNumberFailure
