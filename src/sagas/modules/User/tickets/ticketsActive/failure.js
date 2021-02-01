/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * TICKETS_ACTIVE_FAILURE
 */
function* ticketsActiveFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default ticketsActiveFailure
