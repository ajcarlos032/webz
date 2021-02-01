/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { OfficeTypes } from './Actions'

import {
  buildObjectFromArray,
  buildObjectFromObject,
  buildCommonState,
  buildCommonReducer,
} from '@store/utils'
import { FETCH_MODE, SEARCH_SAVE_MAX } from '@store/Office/constants'

// fetchRooms

const fetchRoomsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchRooms', { loading: true }),
})

const fetchRoomsSuccess = (state, { result }) => {
  const newData = buildObjectFromArray(result.data, 'room')
  const rooms =
    result.paginatorInfo.currentPage === 1 ? newData : { ...state.data.rooms, ...newData }
  return {
    ...state,
    data: {
      ...state.data,
      rooms,
      paginatorInfo: result.paginatorInfo,
      timestamp: new Date().getTime(),
    },
    fetchMode: FETCH_MODE.DEFAULT,
    ...buildCommonState('fetchRooms', { success: true }),
  }
}

const fetchRoomsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchRooms', { failure: true, error }),
})

// fetchRoom

const fetchRoomLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchRoom', { loading: true }),
})

const fetchRoomSuccess = (state, { result }) => {
  const rooms = { ...state.data.rooms, ...buildObjectFromObject(result, 'room') }
  // if (rooms[`room_${result.id}`]) rooms[`room_${result.id}`] = result
  return {
    ...state,
    data: {
      ...state.data,
      rooms,
    },
    ...buildCommonState('fetchRoom', { success: true }),
  }
}

const fetchRoomFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchRoom', { failure: true, error }),
})

// searchRooms

const searchRoomsLoading = (state) => ({
  ...state,
  ...buildCommonState('searchRooms', { loading: true }),
})

const searchRoomsSuccess = (state, { result }) => ({
  ...state,
  data: {
    rooms: buildObjectFromArray(result, 'room'),
    paginatorInfo: { currentPage: 0, lastPage: 0 },
    timestamp: new Date().getTime(),
  },
  fetchMode: FETCH_MODE.SEARCH,
  ...buildCommonState('searchRooms', { success: true }),
})

const searchRoomsFailure = (state, { error }) => ({
  ...state,
  data: {
    rooms: {},
    paginatorInfo: { currentPage: 0, lastPage: 0 },
    timestamp: new Date().getTime(),
  },
  ...buildCommonState('searchRooms', { failure: true, error }),
})

const saveSearch = (state, { text }) => {
  const _searches = (state.searches || []).filter((t) => t !== text)
  _searches.unshift(text)
  let searches = _searches
  if (SEARCH_SAVE_MAX > -1) {
    searches = _searches.slice(0, SEARCH_SAVE_MAX)
  }

  return {
    ...state,
    searches,
  }
}

const removeSearch = (state, { text }) => {
  const searches = (state.searches || []).filter((t) => t !== text)

  return {
    ...state,
    searches,
  }
}

// favoriteRooms

const favoriteRoomsLoading = (state) => ({
  ...state,
  ...buildCommonState('favoriteRooms', { loading: true }),
})

const favoriteRoomsSuccess = (state) => ({
  ...state,
  ...buildCommonState('favoriteRooms', { success: true }),
})

const favoriteRoomsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('favoriteRooms', { failure: true, error }),
})

// fetchRoomAttributes

const fetchRoomAttributesLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchRoomAttributes', { loading: true }),
})

const fetchRoomAttributesSuccess = (state, { result }) => ({
  ...state,
  attributes: result,
  ...buildCommonState('fetchRoomAttributes', { success: true }),
})

const fetchRoomAttributesFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchRoomAttributes', { failure: true, error }),
})

// fetchRoomFacilities

const fetchRoomFacilitiesLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchRoomFacilities', { loading: true }),
})

const fetchRoomFacilitiesSuccess = (state, { result }) => ({
  ...state,
  facilities: result,
  ...buildCommonState('fetchRoomFacilities', { success: true }),
})

const fetchRoomFacilitiesFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchRoomFacilities', { failure: true, error }),
})

// fetchRoomTypes

const fetchRoomTypesLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchRoomTypes', { loading: true }),
})

const fetchRoomTypesSuccess = (state, { result }) => ({
  ...state,
  types: result,
  ...buildCommonState('fetchRoomTypes', { success: true }),
})

const fetchRoomTypesFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchRoomTypes', { failure: true, error }),
})

// like a room

const likeRoomLoading = (state) => ({
  ...state,
  ...buildCommonState('likeRoom', { loading: true }),
})

const likeRoomSuccess = (state, { result }) => {
  const rooms = { ...state.data.rooms, ...buildObjectFromObject(result, 'room') }

  return {
    ...state,
    data: { ...state.data, rooms },
    ...buildCommonState('likeRoom', { success: true }),
  }
}

const likeRoomFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('likeRoom', { failure: true, error }),
})

// unlock a room

const unlockRoomLoading = (state) => ({
  ...state,
  ...buildCommonState('unlockRoom', { loading: true }),
})

const unlockRoomSuccess = (state) => ({
  ...state,
  ...buildCommonState('unlockRoom', { success: true }),
})

const unlockRoomFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('unlockRoom', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(OfficeTypes, {
    fetchRoomsLoading,
    fetchRoomsSuccess,
    fetchRoomsFailure,

    fetchRoomLoading,
    fetchRoomSuccess,
    fetchRoomFailure,

    searchRoomsLoading,
    searchRoomsSuccess,
    searchRoomsFailure,

    saveSearch,
    removeSearch,

    favoriteRoomsLoading,
    favoriteRoomsSuccess,
    favoriteRoomsFailure,

    fetchRoomAttributesLoading,
    fetchRoomAttributesSuccess,
    fetchRoomAttributesFailure,

    fetchRoomFacilitiesLoading,
    fetchRoomFacilitiesSuccess,
    fetchRoomFacilitiesFailure,

    fetchRoomTypesLoading,
    fetchRoomTypesSuccess,
    fetchRoomTypesFailure,

    likeRoomLoading,
    likeRoomSuccess,
    likeRoomFailure,

    unlockRoomLoading,
    unlockRoomSuccess,
    unlockRoomFailure,
  }),
})
