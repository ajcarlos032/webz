/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * ADD_MEMBER_FAILURE
 */
function* addMemberFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default addMemberFailure
