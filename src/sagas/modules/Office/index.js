import { all, takeLatest } from 'redux-saga/effects'
import { OfficeTypes } from '@store/Office/Actions'

import fetchRooms from './fetchRooms'
import fetchRoomsSuccess from './fetchRooms/success'
import fetchRoomsFailure from './fetchRooms/failure'

import fetchRoom from './fetchRoom'
import fetchRoomSuccess from './fetchRoom/success'
import fetchRoomFailure from './fetchRoom/failure'

import searchRooms from './searchRooms'
import searchRoomsSuccess from './searchRooms/success'
import searchRoomsFailure from './searchRooms/failure'

import favoriteRooms from './favoriteRooms'
import favoriteRoomsSuccess from './favoriteRooms/success'
import favoriteRoomsFailure from './favoriteRooms/failure'

import fetchRoomAttributes from './filters/fetchRoomAttributes'

import fetchRoomFacilities from './filters/fetchRoomFacilities'

import fetchRoomTypes from './filters/fetchRoomTypes'

import likeRoom from './likeRoom'
import likeRoomSuccess from './likeRoom/success'
import likeRoomFailure from './likeRoom/failure'

import unlockRoom from './unlockRoom'
import unlockRoomSuccess from './unlockRoom/success'
import unlockRoomFailure from './unlockRoom/failure'

export default function* root() {
  yield all([
    // Fetch Rooms.
    takeLatest(OfficeTypes.FETCH_ROOMS, fetchRooms),
    takeLatest(OfficeTypes.FETCH_ROOMS_SUCCESS, fetchRoomsSuccess),
    takeLatest(OfficeTypes.FETCH_ROOMS_FAILURE, fetchRoomsFailure),

    // Fetch single Room.
    takeLatest(OfficeTypes.FETCH_ROOM, fetchRoom),
    takeLatest(OfficeTypes.FETCH_ROOM_SUCCESS, fetchRoomSuccess),
    takeLatest(OfficeTypes.FETCH_ROOM_FAILURE, fetchRoomFailure),

    // Search Rooms.
    takeLatest(OfficeTypes.SEARCH_ROOMS, searchRooms),
    takeLatest(OfficeTypes.SEARCH_ROOMS_SUCCESS, searchRoomsSuccess),
    takeLatest(OfficeTypes.SEARCH_ROOMS_FAILURE, searchRoomsFailure),

    // Fetch favorite rooms.
    takeLatest(OfficeTypes.FAVORITE_ROOMS, favoriteRooms),
    takeLatest(OfficeTypes.FAVORITE_ROOMS_SUCCESS, favoriteRoomsSuccess),
    takeLatest(OfficeTypes.FAVORITE_ROOMS_FAILURE, favoriteRoomsFailure),

    // Fetch Room Attributes.
    takeLatest(OfficeTypes.FETCH_ROOM_ATTRIBUTES, fetchRoomAttributes),

    // Fetch Room Facilities.
    takeLatest(OfficeTypes.FETCH_ROOM_FACILITIES, fetchRoomFacilities),

    // Fetch Room Types.
    takeLatest(OfficeTypes.FETCH_ROOM_TYPES, fetchRoomTypes),

    // Like a Room.
    takeLatest(OfficeTypes.LIKE_ROOM, likeRoom),
    takeLatest(OfficeTypes.LIKE_ROOM_SUCCESS, likeRoomSuccess),
    takeLatest(OfficeTypes.LIKE_ROOM_FAILURE, likeRoomFailure),

    // Unlock a Room.
    takeLatest(OfficeTypes.UNLOCK_ROOM, unlockRoom),
    takeLatest(OfficeTypes.UNLOCK_ROOM_SUCCESS, unlockRoomSuccess),
    takeLatest(OfficeTypes.UNLOCK_ROOM_FAILURE, unlockRoomFailure),
  ])
}
