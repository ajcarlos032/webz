import { put } from 'redux-saga/effects'

import TeamActions from '@store/Team/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * CREATE_TEAM
 */
function* createTeam({ payload, callback }) {
  console.log('create team...')
  console.log(payload)
  try {
    yield put(TeamActions.createTeamLoading())
    const result = yield apis.createTeam(payload)
    console.log({ createTeam: result })

    if (result) {
      yield put(TeamActions.createTeamSuccess())
      yield put(UserActions.addTeam(result))
      if (callback) callback()
    } else {
      yield put(TeamActions.createTeamFailure())
    }
  } catch (error) {
    yield put(TeamActions.createTeamFailure(errorHandling(error)))
  }
}

export default createTeam
