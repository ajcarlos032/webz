import { put } from 'redux-saga/effects'

import TeamActions from '@store/Team/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_TEAMS
 */
function* fetchTeams() {
  console.log('Fetching teams...')
  try {
    yield put(TeamActions.fetchTeamsLoading())
    const result = yield apis.fetchTeams()
    console.log({ fetchTeams: result })
    yield put(TeamActions.fetchTeamsSuccess(result))
  } catch (error) {
    yield put(TeamActions.fetchTeamsFailure(errorHandling(error)))
  }
}

export default fetchTeams
