/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * FETCH_PACKAGES_FAILURE
 */
function* fetchPackagesFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default fetchPackagesFailure
