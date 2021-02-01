/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { UserTypes } from './Actions'

import {
  buildObjectFromArray,
  buildObjectFromObject,
  buildCommonState,
  buildCommonReducer,
} from '@store/utils'

const init = (state) => ({
  ...state,
  ...INITIAL_STATE,
})

const setMe = (state, { me }) => ({ ...state, me })

const updateFavoritesCount = (state, { count }) => ({
  ...state,
  me: { ...state.me, favorites_count: (state.me.favorites_count || 0) + count },
})

const setBookings = (state, { result }) => {
  const bookings = {
    data: buildObjectFromArray(result, 'booking'),
    ids: result.map(({ id }) => id),
    timestamp: new Date().getTime(),
  }

  return {
    ...state,
    bookings,
  }
}

const updateBookingsStatus = (state, { bookingIds, status, statusName }) => {
  const data = { ...state.bookings.data }
  bookingIds.forEach((id) => {
    const key = `booking_${id}`
    if (data[key]) {
      data[key].status = status
      data[key].status_name = statusName
    }
  })

  return {
    ...state,
    bookings: { ...state.bookings, data },
  }
}

const updateBookings = (state, { booking }) => {
  const bookingIds = state.bookings.ids.filter((id) => id !== booking.id)
  bookingIds.push(booking.id)

  const bookings = {
    data: { ...state.bookings.data, ...buildObjectFromObject(booking, 'booking') },
    ids: bookingIds,
    timestamp: state.bookings.timestamp,
  }

  return {
    ...state,
    bookings,
  }
}

const setFavoriteRooms = (state, { result }) => {
  const favoriteRooms = {
    data: buildObjectFromArray(result, 'room'),
    ids: result.map(({ id }) => id),
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    favoriteRooms,
  }
}

const updateFavoriteRooms = (state, { result }) => {
  const rooms = state.favoriteRooms.data
  const ids = state.favoriteRooms.ids.filter((id) => id !== result.id)

  if (rooms[`room_${result.id}`]) {
    rooms[`room_${result.id}`] = result
    ids.push(result.id)
  }

  return {
    ...state,
    favoriteRooms: {
      ...state.favoriteRooms,
      data: rooms,
      ids,
    },
  }
}

const updateFavoriteRoomsOnLike = (state, { result, hasAlreadyLiked }) => {
  const rooms = { ...state.favoriteRooms.data, ...buildObjectFromObject(result, 'room') }
  if (hasAlreadyLiked) delete rooms[`room_${result.id}`]

  const ids = state.favoriteRooms.ids.filter((id) => id !== result.id)
  if (!hasAlreadyLiked) ids.push(result.id)

  const updateCount = hasAlreadyLiked ? -1 : 1
  return {
    ...state,
    me: { ...state.me, favorites_count: (state.me.favorites_count || 0) + updateCount },
    favoriteRooms: {
      ...state.favoriteRooms,
      data: rooms,
      ids,
    },
  }
}

const updateLogos = (state, { result }) => {
  const logos = state.me.logos.filter((id) => id !== result.id)
  logos.push(result)

  return {
    ...state,
    me: { ...state.me, logos },
  }
}

// me

const meLoading = (state) => ({
  ...state,
  ...buildCommonState('me', { loading: true }),
})

const meSuccess = (state, { result }) => {
  return {
    ...state,
    me: result,
    ...buildCommonState('me', { success: true }),
  }
}

const meFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('me', { failure: true, error }),
})

// updateProfile

const updateProfileLoading = (state) => ({
  ...state,
  ...buildCommonState('updateProfile', { loading: true }),
})

const updateProfileSuccess = (state, { result }) => {
  return {
    ...state,
    me: result,
    ...buildCommonState('updateProfile', { success: true }),
  }
}

const updateProfileFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('updateProfile', { failure: true, error }),
})

// updatePassword

const updatePasswordLoading = (state) => ({
  ...state,
  ...buildCommonState('updatePassword', { loading: true }),
})

const updatePasswordSuccess = (state) => ({
  ...state,
  ...buildCommonState('updatePassword', { success: true }),
})

const updatePasswordFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('updatePassword', { failure: true, error }),
})

// updatePhone

const updatePhoneLoading = (state) => ({
  ...state,
  ...buildCommonState('updatePhone', { loading: true }),
})

const updatePhoneSuccess = (state, { phone }) => {
  return {
    ...state,
    me: { ...state.me, phone: phone ?? state.me.phone },
    ...buildCommonState('updatePhone', { success: true }),
  }
}

const updatePhoneFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('updatePhone', { failure: true, error }),
})

// Add Car number

const addCarNumberLoading = (state) => ({
  ...state,
  ...buildCommonState('addCarNumber', { loading: true }),
})

const addCarNumberSuccess = (state, { result }) => {
  const car_numbers = [...state.me.car_numbers, result]
  return {
    ...state,
    me: { ...state.me, car_numbers },
    ...buildCommonState('addCarNumber', { success: true }),
  }
}

const addCarNumberFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('addCarNumber', { failure: true, error }),
})

// Set Default CarNumber

const setDefaultCarNumberLoading = (state) => ({
  ...state,
  ...buildCommonState('setDefaultCarNumber', { loading: true }),
})

const setDefaultCarNumberSuccess = (state, { id }) => {
  let car_number = state.me.car_number

  const car_numbers = state.me.car_numbers.map((cNumber) => {
    const c = { ...cNumber }
    c.default = c.id === id
    if (c.id === id) car_number = c.number

    return c
  })

  return {
    ...state,
    me: { ...state.me, car_numbers, car_number },
    ...buildCommonState('setDefaultCarNumber', { success: true }),
  }
}

const setDefaultCarNumberFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('setDefaultCarNumber', { failure: true, error }),
})

// Delete CarNumber

const deleteCarNumberLoading = (state) => ({
  ...state,
  ...buildCommonState('deleteCarNumber', { loading: true }),
})

const deleteCarNumberSuccess = (state, { id }) => {
  const car_numbers = state.me.car_numbers.filter((cNumber) => cNumber.id !== id)

  return {
    ...state,
    me: { ...state.me, car_numbers },
    ...buildCommonState('deleteCarNumber', { success: true }),
  }
}

const deleteCarNumberFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('deleteCarNumber', { failure: true, error }),
})

// Reviews

const fetchReviewsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchReviews', { loading: true }),
})

const fetchReviewsSuccess = (state, { result }) => {
  const reviews = {
    data: buildObjectFromArray(result, 'review'),
    ids: (result || []).map(({ id }) => id),
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    reviews,
    ...buildCommonState('fetchReviews', { success: true }),
  }
}

const fetchReviewsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchReviews', { failure: true, error }),
})

// Review

const fetchReviewLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchReview', { loading: true }),
})

const fetchReviewSuccess = (state, { review }) => {
  const reviewIds = state.reviews.ids.filter((id) => id !== review.id)
  reviewIds.push(review.id)

  const reviews = {
    data: { ...state.reviews.data, ...buildObjectFromObject(review, 'review') },
    ids: reviewIds,
  }

  return {
    ...state,
    reviews,
    ...buildCommonState('fetchReview', { success: true }),
  }
}

const fetchReviewFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchReview', { failure: true, error }),
})

const updateReviews = (state, { review }) => {
  const reviewIds = state.reviews.ids.filter((id) => id !== review.id)
  reviewIds.push(review.id)

  const reviews = {
    data: { ...state.reviews.data, ...buildObjectFromObject(review, 'review') },
    ids: reviewIds,
  }

  return {
    ...state,
    reviews,
  }
}

const setTeams = (state, { result }) => {
  const teams = {
    data: buildObjectFromArray(result, 'team'),
    ids: result.map(({ id }) => id),
    timestamp: new Date().getTime(),
  }

  return {
    ...state,
    teams,
  }
}

const addTeam = (state, { result }) => {
  const teamIds = state.teams.ids.filter((id) => id !== result.id)
  teamIds.push(result.id)

  const teams = {
    data: { ...state.teams.data, ...buildObjectFromObject(result, 'team') },
    ids: teamIds,
    timestamp: state.teams.timestamp,
  }

  return {
    ...state,
    teams,
  }
}

const updateTeams = (state, { result }) => {
  return {
    ...state,
    teams: {
      ...state.teams,
      data: { ...state.teams.data, ...buildObjectFromObject(result, 'team') },
    },
  }
}

// Message to support / create ticket

const messageToSupportLoading = (state) => ({
  ...state,
  ...buildCommonState('messageToSupport', { loading: true }),
})

const messageToSupportSuccess = (state) => ({
  ...state,
  ...buildCommonState('messageToSupport', { success: true }),
})

const messageToSupportFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('messageToSupport', { failure: true, error }),
})

// Fetch active tickets

const ticketsActiveLoading = (state) => ({
  ...state,
  ...buildCommonState('ticketsActive', { loading: true }),
})

const ticketsActiveSuccess = (state, { result }) => {
  const tickets = {
    data: { ...state.tickets.data, ...buildObjectFromArray(result, 'ticket') },
    ids: { active: result.map(({ id }) => id), completed: state.tickets.ids.complete },
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    tickets,
    ...buildCommonState('ticketsActive', { success: true }),
  }
}

const ticketsActiveFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('ticketsActive', { failure: true, error }),
  }
}

// Fetch completed tickets

const ticketsCompleteLoading = (state) => ({
  ...state,
  ...buildCommonState('ticketsComplete', { loading: true }),
})

const ticketsCompleteSuccess = (state, { result }) => {
  const tickets = {
    data: { ...state.tickets.data, ...buildObjectFromArray(result, 'ticket') },
    ids: { active: state.tickets.ids.active, completed: result.map(({ id }) => id) },
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    tickets,
    ...buildCommonState('ticketsComplete', { success: true }),
  }
}

const ticketsCompleteFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('ticketsComplete', { failure: true, error }),
  }
}

// Fetch ticket messages

const ticketMessagesLoading = (state) => ({
  ...state,
  ...buildCommonState('ticketMessages', { loading: true }),
})

const ticketMessagesSuccess = (state, { ticketId, result }) => {
  const ticket = state.tickets.data[`ticket_${ticketId}`]
  ticket.messages = result
  const tickets = {
    data: { ...state.tickets.data, ...buildObjectFromObject(ticket, 'ticket') },
  }
  return {
    ...state,
    tickets: { ...state.tickets, ...tickets },
    ...buildCommonState('ticketMessages', { success: true }),
  }
}

const ticketMessagesFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('ticketMessages', { failure: true, error }),
  }
}

// Add credits

const addCreditsLoading = (state) => ({
  ...state,
  ...buildCommonState('addCredits', { loading: true }),
})

const addCreditsSuccess = (state, { result }) => {
  return {
    ...state,
    credits: [...state.credits, result],
    ...buildCommonState('addCredits', { success: true }),
  }
}

const addCreditsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('addCredits', { failure: true, error }),
  }
}

// Fetch credits

const fetchCreditsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchCredits', { loading: true }),
})

const fetchCreditsSuccess = (state, { result }) => {
  return {
    ...state,
    credits: result,
    ...buildCommonState('fetchCredits', { success: true }),
  }
}

const fetchCreditsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchCredits', { failure: true, error }),
  }
}

// Add payment method

const addPaymentMethodLoading = (state) => ({
  ...state,
  ...buildCommonState('addPaymentMethod', { loading: true }),
})

const addPaymentMethodSuccess = (state, { result }) => {
  return {
    ...state,
    paymentMethods: [...state.paymentMethods, result],
    ...buildCommonState('addPaymentMethod', { success: true }),
  }
}

const addPaymentMethodFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('addPaymentMethod', { failure: true, error }),
  }
}

// Fetch payment methods

const fetchPaymentMethodsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchPaymentMethods', { loading: true }),
})

const fetchPaymentMethodsSuccess = (state, { result }) => {
  return {
    ...state,
    paymentMethods: result,
    ...buildCommonState('fetchPaymentMethods', { success: true }),
  }
}

const fetchPaymentMethodsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchPaymentMethods', { failure: true, error }),
  }
}

// Choose payment method

const choosePaymentMethodLoading = (state) => ({
  ...state,
  ...buildCommonState('choosePaymentMethod', { loading: true }),
})

const choosePaymentMethodSuccess = (state, { result }) => {
  const paymentMethods = state.paymentMethods.map((paymentMethod) => ({
    ...paymentMethod,
    default: paymentMethod.id === result.id,
  }))
  return {
    ...state,
    paymentMethods,
    ...buildCommonState('choosePaymentMethod', { success: true }),
  }
}

const choosePaymentMethodFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('choosePaymentMethod', { failure: true, error }),
  }
}

// Delete payment method

const deletePaymentMethodLoading = (state) => ({
  ...state,
  ...buildCommonState('deletePaymentMethod', { loading: true }),
})

const deletePaymentMethodSuccess = (state, { id }) => {
  const paymentMethods = state.paymentMethods.filter(({ id: _id }) => _id !== id)
  return {
    ...state,
    paymentMethods,
    ...buildCommonState('deletePaymentMethod', { success: true }),
  }
}

const deletePaymentMethodFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('deletePaymentMethod', { failure: true, error }),
  }
}

// Fetch transactions

const fetchTransactionsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchTransactions', { loading: true }),
})

const fetchTransactionsSuccess = (state, { result }) => {
  return {
    ...state,
    transactions: result,
    ...buildCommonState('fetchTransactions', { success: true }),
  }
}

const fetchTransactionsFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchTransactions', { failure: true, error }),
  }
}

// Fetch packages

const fetchPackagesLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchPackages', { loading: true }),
})

const fetchPackagesSuccess = (state, { result }) => {
  return {
    ...state,
    packages: result,
    ...buildCommonState('fetchPackages', { success: true }),
  }
}

const fetchPackagesFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('fetchPackages', { failure: true, error }),
  }
}

// Choose package

const choosePackageLoading = (state) => ({
  ...state,
  ...buildCommonState('choosePackage', { loading: true }),
})

const choosePackageSuccess = (state, { result }) => {
  return {
    ...state,
    me: { ...state.me, package: result },
    ...buildCommonState('choosePackage', { success: true }),
  }
}

const choosePackageFailure = (state, { error }) => {
  return {
    ...state,
    ...buildCommonState('choosePackage', { failure: true, error }),
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(UserTypes, {
    init,
    setMe,
    updateFavoritesCount,
    setBookings,
    updateBookings,
    updateBookingsStatus,
    setFavoriteRooms,
    updateFavoriteRooms,
    updateFavoriteRoomsOnLike,
    updateLogos,

    meLoading,
    meSuccess,
    meFailure,

    updateProfileLoading,
    updateProfileSuccess,
    updateProfileFailure,

    updatePasswordLoading,
    updatePasswordSuccess,
    updatePasswordFailure,

    updatePhoneLoading,
    updatePhoneSuccess,
    updatePhoneFailure,

    addCarNumberLoading,
    addCarNumberSuccess,
    addCarNumberFailure,

    setDefaultCarNumberLoading,
    setDefaultCarNumberSuccess,
    setDefaultCarNumberFailure,

    deleteCarNumberLoading,
    deleteCarNumberSuccess,
    deleteCarNumberFailure,

    fetchReviewsLoading,
    fetchReviewsSuccess,
    fetchReviewsFailure,

    fetchReviewLoading,
    fetchReviewSuccess,
    fetchReviewFailure,

    updateReviews,
    setTeams,
    addTeam,
    updateTeams,

    messageToSupportLoading,
    messageToSupportSuccess,
    messageToSupportFailure,

    ticketMessagesLoading,
    ticketMessagesSuccess,
    ticketMessagesFailure,

    ticketsActiveLoading,
    ticketsActiveSuccess,
    ticketsActiveFailure,

    ticketsCompleteLoading,
    ticketsCompleteSuccess,
    ticketsCompleteFailure,

    addCreditsLoading,
    addCreditsSuccess,
    addCreditsFailure,

    fetchCreditsLoading,
    fetchCreditsSuccess,
    fetchCreditsFailure,

    addPaymentMethodLoading,
    addPaymentMethodSuccess,
    addPaymentMethodFailure,

    fetchPaymentMethodsLoading,
    fetchPaymentMethodsSuccess,
    fetchPaymentMethodsFailure,

    choosePaymentMethodLoading,
    choosePaymentMethodSuccess,
    choosePaymentMethodFailure,

    deletePaymentMethodLoading,
    deletePaymentMethodSuccess,
    deletePaymentMethodFailure,

    fetchTransactionsLoading,
    fetchTransactionsSuccess,
    fetchTransactionsFailure,

    fetchPackagesLoading,
    fetchPackagesSuccess,
    fetchPackagesFailure,

    choosePackageLoading,
    choosePackageSuccess,
    choosePackageFailure,
  }),
})
