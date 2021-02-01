/* eslint-disable sort-keys */
import { FETCH_MODE } from '@store/Office/constants'
import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  data: {
    rooms: {},
    paginatorInfo: {
      currentPage: 0,
      lastPage: 0,
    },
    timestamp: null,
  },

  attributes: {},

  facilities: {},

  types: {},

  searches: [],

  fetchMode: FETCH_MODE.DEFAULT,

  ...buildCommonState('fetchRooms'),
  ...buildCommonState('fetchRoom'),
  ...buildCommonState('searchRooms'),
  ...buildCommonState('favoriteRooms'),
  ...buildCommonState('fetchRoomAttributes'),
  ...buildCommonState('fetchRoomFacilities'),
  ...buildCommonState('fetchRoomTypes'),
  ...buildCommonState('likeRoom'),
  ...buildCommonState('unlockRoom'),
}
