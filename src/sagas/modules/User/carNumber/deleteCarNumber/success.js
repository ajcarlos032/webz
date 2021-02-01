import { showToast, TYPE } from '@helpers/toast'
/**
 * DELETE_CAR_NUMBER_SUCCESS
 */
// eslint-disable-next-line require-yield
function* deleteCarNumberSuccess() {
  showToast('Success', TYPE.SUCCESS)
}

export default deleteCarNumberSuccess
