/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * TICKET_MESSAGES_FAILURE
 */
function* ticketMessagesFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default ticketMessagesFailure
