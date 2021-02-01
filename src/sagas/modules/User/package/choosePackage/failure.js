/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CHOOSE_PACKAGE_FAILURE
 */
function* choosePackageFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default choosePackageFailure
