/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { BookingTypes } from './Actions'
import { buildCommonState, buildCommonReducer } from '@store/utils'

// fetchBookings

const fetchBookingsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchBookings', { loading: true }),
})

const fetchBookingsSuccess = (state) => ({
  ...state,
  ...buildCommonState('fetchBookings', { success: true }),
})

const fetchBookingsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchBookings', { failure: true, error }),
})

// fetchBooking

const fetchBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchBooking', { loading: true }),
})

const fetchBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('fetchBooking', { success: true }),
})

const fetchBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchBooking', { failure: true, error }),
})

// createBooking

const createBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('createBooking', { loading: true }),
})

const createBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('createBooking', { success: true }),
})

const createBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('createBooking', { failure: true, error }),
})

// cancelBooking

const cancelBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('cancelBooking', { loading: true }),
})

const cancelBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('cancelBooking', { success: true }),
})

const cancelBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('cancelBooking', { failure: true, error }),
})

// continueBooking

const continueBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('continueBooking', { loading: true }),
})

const continueBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('continueBooking', { success: true }),
})

const continueBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('continueBooking', { failure: true, error }),
})

// completeBooking

const completeBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('completeBooking', { loading: true }),
})

const completeBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('completeBooking', { success: true }),
})

const completeBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('completeBooking', { failure: true, error }),
})

// completeBookingNotify

const completeBookingNotifyLoading = (state) => ({
  ...state,
  ...buildCommonState('completeBookingNotify', { loading: true }),
})

const completeBookingNotifySuccess = (state) => ({
  ...state,
  ...buildCommonState('completeBookingNotify', { success: true }),
})

const completeBookingNotifyFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('completeBookingNotify', { failure: true, error }),
})

// completeAllBookings

const completeAllBookingsLoading = (state) => ({
  ...state,
  ...buildCommonState('completeAllBookings', { loading: true }),
})

const completeAllBookingsSuccess = (state) => ({
  ...state,
  ...buildCommonState('completeAllBookings', { success: true }),
})

const completeAllBookingsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('completeAllBookings', { failure: true, error }),
})

// uploadLogos

const uploadLogosLoading = (state) => ({
  ...state,
  ...buildCommonState('uploadLogos', { loading: true }),
})

const uploadLogosSuccess = (state) => ({
  ...state,
  ...buildCommonState('uploadLogos', { success: true }),
})

const uploadLogosFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('uploadLogos', { failure: true, error }),
})

// bookingUseLogo

const bookingUseLogoLoading = (state) => ({
  ...state,
  ...buildCommonState('bookingUseLogo', { loading: true }),
})

const bookingUseLogoSuccess = (state) => ({
  ...state,
  ...buildCommonState('bookingUseLogo', { success: true }),
})

const bookingUseLogoFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('bookingUseLogo', { failure: true, error }),
})

// Create Review

const createReviewLoading = (state) => ({
  ...state,
  ...buildCommonState('createReview', { loading: true }),
})

const createReviewSuccess = (state) => ({
  ...state,
  ...buildCommonState('createReview', { success: true }),
})

const createReviewFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('createReview', { failure: true, error }),
})

// Update Review

const updateReviewLoading = (state) => ({
  ...state,
  ...buildCommonState('updateReview', { loading: true }),
})

const updateReviewSuccess = (state) => ({
  ...state,
  ...buildCommonState('updateReview', { success: true }),
})

const updateReviewFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('updateReview', { failure: true, error }),
})

// Location state

const locationStateLoading = (state) => ({
  ...state,
  ...buildCommonState('locationState', { loading: true }),
})

const locationStateSuccess = (state) => ({
  ...state,
  ...buildCommonState('locationState', { success: true }),
})

const locationStateFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('locationState', { failure: true, error }),
})

// Room extendability

const checkRoomExtendableLoading = (state) => ({
  ...state,
  ...buildCommonState('checkRoomExtendable', { loading: true }),
})

const checkRoomExtendableSuccess = (state) => ({
  ...state,
  ...buildCommonState('checkRoomExtendable', { success: true }),
})

const checkRoomExtendableFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('checkRoomExtendable', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(BookingTypes, {
    fetchBookingsLoading,
    fetchBookingsSuccess,
    fetchBookingsFailure,

    fetchBookingLoading,
    fetchBookingSuccess,
    fetchBookingFailure,

    createBookingLoading,
    createBookingSuccess,
    createBookingFailure,

    cancelBookingLoading,
    cancelBookingSuccess,
    cancelBookingFailure,

    continueBookingLoading,
    continueBookingSuccess,
    continueBookingFailure,

    completeBookingLoading,
    completeBookingSuccess,
    completeBookingFailure,

    completeAllBookingsLoading,
    completeAllBookingsSuccess,
    completeAllBookingsFailure,

    completeBookingNotifyLoading,
    completeBookingNotifySuccess,
    completeBookingNotifyFailure,

    uploadLogosLoading,
    uploadLogosSuccess,
    uploadLogosFailure,

    bookingUseLogoLoading,
    bookingUseLogoSuccess,
    bookingUseLogoFailure,

    createReviewLoading,
    createReviewSuccess,
    createReviewFailure,

    updateReviewLoading,
    updateReviewSuccess,
    updateReviewFailure,

    locationStateLoading,
    locationStateSuccess,
    locationStateFailure,

    checkRoomExtendableLoading,
    checkRoomExtendableSuccess,
    checkRoomExtendableFailure,
  }),
})
