import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('addMember', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('attachBooking', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('createTeam', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('fetchMyTeams', null, null, null, ['error']),

  ...buildCommonActions('fetchTeams', null, null, ['result'], ['error']),
})

export const TeamTypes = Types

export default Creators
