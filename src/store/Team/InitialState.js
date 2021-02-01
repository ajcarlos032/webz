import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  teams: {
    data: {},
    ids: [],
    timestamp: null,
  },

  ...buildCommonState('addMember'),
  ...buildCommonState('attachBooking'),
  ...buildCommonState('createTeam'),
  ...buildCommonState('fetchMyTeams'),
  ...buildCommonState('fetchTeams'),
}
