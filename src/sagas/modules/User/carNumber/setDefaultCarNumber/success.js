import { showToast, TYPE } from '@helpers/toast'
/**
 * SET_DEFAULT_CAR_NUMBER_SUCCESS
 */
// eslint-disable-next-line require-yield
function* setDefaultCarNumberSuccess() {
  showToast('Success', TYPE.SUCCESS)
}

export default setDefaultCarNumberSuccess
