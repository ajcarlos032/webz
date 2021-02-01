/* eslint-disable require-yield */
import { showToast, TYPE } from '@helpers/toast'
/**
 * CREATE_TEAM_FAILURE
 */
function* createTeamFailure({ error }) {
  showToast(error, TYPE.ERROR)
}

export default createTeamFailure
