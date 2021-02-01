import { showToast, TYPE } from '@helpers/toast'
/**
 * ADD_CAR_NUMBER_SUCCESS
 */
// eslint-disable-next-line require-yield
function* addCarNumberSuccess() {
  showToast('Successfully created', TYPE.SUCCESS)
}

export default addCarNumberSuccess
