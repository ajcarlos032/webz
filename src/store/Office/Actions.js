import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('fetchRooms', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('fetchRoom', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('searchRooms', ['payload'], null, ['result'], ['error']),

  ...buildCommonActions('saveSearch', ['text']),

  ...buildCommonActions('removeSearch', ['text']),

  ...buildCommonActions('favoriteRooms', null, null, null, ['error']),

  ...buildCommonActions('fetchRoomAttributes', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchRoomFacilities', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchRoomTypes', null, null, ['result'], ['error']),

  ...buildCommonActions('likeRoom', ['room_id', 'hasAlreadyLiked'], null, ['result'], ['error']),

  ...buildCommonActions('unlockRoom', ['payload', 'callback'], null, ['message'], ['error']),
})

export const OfficeTypes = Types

export default Creators
