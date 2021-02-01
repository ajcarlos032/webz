import { BOOKING_STATUS } from '@screens/MyBookings/shared/constants'

export const userSelector = (state) => state.user

export const meSelector = (state) => state.user.me

export const bookingsSelector = (state) => state.user.bookings.data
export const bookingIdsSelector = (state) => state.user.bookings.ids
export const activeBookingsSelector = (state) =>
  Object.values(state.user.bookings.data).filter(({ status }) =>
    [BOOKING_STATUS.ACTIVE, BOOKING_STATUS.PENDING, BOOKING_STATUS.EXTENDED].includes(status),
  )
export const extendedBookingsSelector = (state) =>
  Object.values(state.user.bookings.data).filter(({ status }) => status === BOOKING_STATUS.EXTENDED)
export const activeBookingIdsSelector = (state) =>
  Object.values(state.user.bookings.data)
    .filter(({ status }) =>
      [BOOKING_STATUS.ACTIVE, BOOKING_STATUS.PENDING, BOOKING_STATUS.EXTENDED].includes(status),
    )
    .map(({ id }) => id)

export const completedBookingsSelector = (state) =>
  Object.values(state.user.bookings.data).filter(
    ({ status }) => status === BOOKING_STATUS.COMPLETED,
  )

export const bookingByIdSelector = (id) => (state) => state.user.bookings.data[`booking_${id}`]

export const favoriteRoomsSelector = (state) => state.user.favoriteRooms.data
export const favoriteRoomIdsSelector = (state) => state.user.favoriteRooms.ids
export const favoriteRoomByIdSelector = (id) => (state) =>
  state.user.favoriteRooms.data[`room_${id}`]

export const reviewsSelector = (state) => state.user.reviews.data
export const reviewIdsSelector = (state) => state.user.reviews.ids
export const reviewByIdSelector = (id) => (state) => state.user.reviews.data[`review_${id}`]

export const myTeamsSelector = (state) => state.user.teams.data
export const myTeamIdsSelector = (state) => state.user.teams.ids
export const myTeamByIdSelector = (id) => (state) => state.user.teams.data[`team_${id}`]

export const activeTicketIdsSelector = (state) => state.user.tickets.ids.active
export const completedTicketIdsSelector = (state) => state.user.tickets.ids.completed
export const ticketByIdSelector = (id) => (state) => state.user.tickets.data[`ticket_${id}`]

export const creditsSelector = (state) => state.user.credits
export const creditsByIdSelector = (_id) => (state) => {
  const credit = state.user.credits.filter(({ id }) => id === _id) || []

  return credit[0]
}

export const paymentMethodsSelector = (state) => state.user.paymentMethods
export const paymentMethodsByIdSelector = (_id) => (state) => {
  const paymentMethod = state.user.paymentMethods.filter(({ id }) => id === _id) || []

  return paymentMethod[0]
}

export const transactionsSelector = (state) => state.user.transactions
export const transactionsByIdSelector = (_id) => (state) => {
  const transaction = state.user.transactions.filter(({ id }) => id === _id) || []

  return transaction[0]
}

export const packagesSelector = (state) => state.user.packages

export const packageByIdSelector = (_id) => (state) => {
  const _package = state.user.packages.filter(({ id }) => id === _id) || []

  return _package[0]
}
