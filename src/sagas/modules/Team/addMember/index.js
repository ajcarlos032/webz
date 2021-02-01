import { put } from 'redux-saga/effects'

import TeamActions from '@store/Team/Actions'
import UserActions from '@store/User/Actions'
import apis from '@apis'

import { errorHandling } from '@sagas/utils'

/**
 * ADD_MEMBER
 */
function* addMember({ payload, callback }) {
  console.log('add member...')
  console.log(payload)
  try {
    yield put(TeamActions.addMemberLoading())
    const result = yield apis.addTeamMember(payload)
    console.log({ addMember: result })

    if (result) {
      yield put(TeamActions.addMemberSuccess())
      yield put(UserActions.updateTeams(result))
      if (callback) callback()
    } else {
      yield put(TeamActions.addMemberFailure())
    }
  } catch (error) {
    yield put(TeamActions.addMemberFailure(errorHandling(error)))
  }
}

export default addMember
