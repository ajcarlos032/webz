import { client } from '@root/apollo'

import { bookingsQuery, bookingQuery } from '../queries'
import {
  createBookingMutation,
  cancelBookingMutation,
  continueBookingMutation,
  completeBookingMutation,
  completeBookingNotifyMutation,
  completeAllBookingsMutation,
  createReviewMutation,
  updateReviewMutation,
  uploadLogosMutation,
  uploadLogoMutation,
  locationStateMutation,
  sameTypeRoomAvailableMutation,
} from '../mutations'

export const fetchBookings = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: bookingsQuery,
      })
      .then((result) => {
        resolve(result.data.bookings)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchBooking = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: bookingQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.booking)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const cancelBooking = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: cancelBookingMutation, variables: payload })
      .then((result) => {
        resolve(result.data.cancelBooking)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const createBooking = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: createBookingMutation, variables: payload })
      .then((result) => {
        resolve(result.data.createBooking)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const continueBooking = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: continueBookingMutation, variables: payload })
      .then((result) => {
        resolve(result.data.continueBooking)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const completeBooking = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: completeBookingMutation, variables: payload })
      .then((result) => {
        resolve(result.data.completeBooking)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const completeAllBookings = () =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: completeAllBookingsMutation })
      .then((result) => {
        resolve(result.data.completeAllBookings)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const completeBookingNotify = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: completeBookingNotifyMutation, variables: payload })
      .then((result) => {
        resolve(result.data.completeBookingNotify)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const createReview = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: createReviewMutation, variables: payload })
      .then((result) => {
        resolve(result.data.createReview)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const updateReview = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: updateReviewMutation, variables: payload })
      .then((result) => {
        resolve(result.data.updateReview)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const uploadLogos = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: uploadLogosMutation, variables: payload })
      .then((result) => {
        resolve(result.data.uploadLogos)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const useLogo = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: uploadLogoMutation, variables: payload })
      .then((result) => {
        resolve(result.data.useLogo)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const locationState = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: locationStateMutation, variables: payload })
      .then((result) => {
        resolve(result.data.locationState)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const checkRoomExtendable = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: sameTypeRoomAvailableMutation, variables: payload })
      .then((result) => {
        resolve(result.data.sameTypeRoomAvailable)
      })
      .catch((error) => {
        reject(error)
      })
  })
