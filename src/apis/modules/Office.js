import { client } from '@root/apollo'
import {
  roomsQuery,
  roomQuery,
  searchRoomsQuery,
  favoriteRoomsQuery,
  roomTypesQuery,
  roomFacilitiesQuery,
  roomAttributesQuery,
  unlockRoomQuery,
} from '../queries'

import { makeRoomFavoriteMutation } from '../mutations'

export const fetchRooms = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: roomsQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.rooms)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchRoom = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: roomQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.room)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const searchRooms = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: searchRoomsQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.searchRoom)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const favoriteRooms = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: favoriteRoomsQuery,
      })
      .then((result) => {
        resolve(result.data.favoriteRooms)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchRoomTypes = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: roomTypesQuery,
        variables: { field: 'name', order: 'ASC' },
      })
      .then((result) => {
        resolve(result.data.roomTypes)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchRoomFacilities = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: roomFacilitiesQuery,
        variables: { field: 'name', order: 'ASC' },
      })
      .then((result) => {
        resolve(result.data.roomFacilities)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchRoomAttributes = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: roomAttributesQuery,
        variables: { field: 'name', order: 'ASC' },
      })
      .then((result) => {
        resolve(result.data.roomAttributes)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const likeRoom = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: makeRoomFavoriteMutation, variables: payload })
      .then((result) => {
        resolve(result.data.makeRoomFavorite)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const unlockRoom = (payload) =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: unlockRoomQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.unlockRoom)
      })
      .catch((error) => {
        reject(error)
      })
  })
