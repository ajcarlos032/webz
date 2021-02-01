import { put } from 'redux-saga/effects'

import TeamActions from '@store/Team/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_MY_TEAMS
 */
function* fetchMyTeams() {
  console.log('Fetching my teams...')
  try {
    yield put(TeamActions.fetchMyTeamsLoading())
    const result = yield apis.fetchMyTeams()
    console.log({ fetchMyTeams: result })
    yield put(TeamActions.fetchMyTeamsSuccess())
    yield put(UserActions.setTeams(result))
  } catch (error) {
    yield put(TeamActions.fetchMyTeamsFailure(errorHandling(error)))
  }
}

export default fetchMyTeams
