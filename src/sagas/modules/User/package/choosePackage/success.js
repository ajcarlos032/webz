import { showToast, TYPE } from '@helpers/toast'
/**
 * CHOOSE_PACKAGE_SUCCESS
 */
// eslint-disable-next-line require-yield
function* choosePackageSuccess() {
  showToast('Successfully upgraded', TYPE.SUCCESS)
}

export default choosePackageSuccess
