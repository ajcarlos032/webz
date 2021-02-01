import { all, takeLatest } from 'redux-saga/effects'
import { BookingTypes } from '@store/Booking/Actions'

import fetchBookings from './fetchBookings'
import fetchBookingsSuccess from './fetchBookings/success'
import fetchBookingsFailure from './fetchBookings/failure'

import fetchBooking from './fetchBooking'
import fetchBookingSuccess from './fetchBooking/success'
import fetchBookingFailure from './fetchBooking/failure'

import createBooking from './createBooking'
import createBookingSuccess from './createBooking/success'
import createBookingFailure from './createBooking/failure'

import cancelBooking from './cancelBooking'
import cancelBookingSuccess from './cancelBooking/success'
import cancelBookingFailure from './cancelBooking/failure'

import continueBooking from './continueBooking'
import continueBookingSuccess from './continueBooking/success'
import continueBookingFailure from './continueBooking/failure'

import completeBooking from './completeBooking'
import completeBookingSuccess from './completeBooking/success'
import completeBookingFailure from './completeBooking/failure'

import completeBookingNotify from './completeNotify/completeNotify'
import completeAllBookings from './completeNotify/completeAllBookings'

import uploadLogos from './uploadLogos'
import uploadLogosSuccess from './uploadLogos/success'
import uploadLogosFailure from './uploadLogos/failure'

import bookingUseLogo from './bookingUseLogo'
import bookingUseLogoSuccess from './bookingUseLogo/success'
import bookingUseLogoFailure from './bookingUseLogo/failure'

import createReview from './review/createReview'
import createReviewSuccess from './review/createReview/success'
import createReviewFailure from './review/createReview/failure'

import updateReview from './review/updateReview'
import updateReviewSuccess from './review/updateReview/success'
import updateReviewFailure from './review/updateReview/failure'

import locationState from './locationState'

import checkRoomExtendable from './checkRoomExtendable'

export default function* root() {
  yield all([
    // Fetch bookings.
    takeLatest(BookingTypes.FETCH_BOOKINGS, fetchBookings),
    takeLatest(BookingTypes.FETCH_BOOKINGS_SUCCESS, fetchBookingsSuccess),
    takeLatest(BookingTypes.FETCH_BOOKINGS_FAILURE, fetchBookingsFailure),

    // Fetch single booking.
    takeLatest(BookingTypes.FETCH_BOOKING, fetchBooking),
    takeLatest(BookingTypes.FETCH_BOOKING_SUCCESS, fetchBookingSuccess),
    takeLatest(BookingTypes.FETCH_BOOKING_FAILURE, fetchBookingFailure),

    // Book Room.
    takeLatest(BookingTypes.CREATE_BOOKING, createBooking),
    takeLatest(BookingTypes.CREATE_BOOKING_SUCCESS, createBookingSuccess),
    takeLatest(BookingTypes.CREATE_BOOKING_FAILURE, createBookingFailure),

    // Continue booking.
    takeLatest(BookingTypes.CONTINUE_BOOKING, continueBooking),
    takeLatest(BookingTypes.CONTINUE_BOOKING_SUCCESS, continueBookingSuccess),
    takeLatest(BookingTypes.CONTINUE_BOOKING_FAILURE, continueBookingFailure),

    // Complete booking.
    takeLatest(BookingTypes.COMPLETE_BOOKING, completeBooking),
    takeLatest(BookingTypes.COMPLETE_BOOKING_SUCCESS, completeBookingSuccess),
    takeLatest(BookingTypes.COMPLETE_BOOKING_FAILURE, completeBookingFailure),

    // Cancel booking.
    takeLatest(BookingTypes.CANCEL_BOOKING, cancelBooking),
    takeLatest(BookingTypes.CANCEL_BOOKING_SUCCESS, cancelBookingSuccess),
    takeLatest(BookingTypes.CANCEL_BOOKING_FAILURE, cancelBookingFailure),

    takeLatest(BookingTypes.COMPLETE_BOOKING_NOTIFY, completeBookingNotify),
    takeLatest(BookingTypes.COMPLETE_ALL_BOOKINGS, completeAllBookings),

    // Upload logos.
    takeLatest(BookingTypes.UPLOAD_LOGOS, uploadLogos),
    takeLatest(BookingTypes.UPLOAD_LOGOS_SUCCESS, uploadLogosSuccess),
    takeLatest(BookingTypes.UPLOAD_LOGOS_FAILURE, uploadLogosFailure),

    // Booking use logo.
    takeLatest(BookingTypes.BOOKING_USE_LOGO, bookingUseLogo),
    takeLatest(BookingTypes.BOOKING_USE_LOGO_SUCCESS, bookingUseLogoSuccess),
    takeLatest(BookingTypes.BOOKING_USE_LOGO_FAILURE, bookingUseLogoFailure),

    // Create review.
    takeLatest(BookingTypes.CREATE_REVIEW, createReview),
    takeLatest(BookingTypes.CREATE_REVIEW_SUCCESS, createReviewSuccess),
    takeLatest(BookingTypes.CREATE_REVIEW_FAILURE, createReviewFailure),

    // Update review.
    takeLatest(BookingTypes.UPDATE_REVIEW, updateReview),
    takeLatest(BookingTypes.UPDATE_REVIEW_SUCCESS, updateReviewSuccess),
    takeLatest(BookingTypes.UPDATE_REVIEW_FAILURE, updateReviewFailure),

    // Update location state.
    takeLatest(BookingTypes.LOCATION_STATE, locationState),

    // Check room extendability
    takeLatest(BookingTypes.CHECK_ROOM_EXTENDABLE, checkRoomExtendable),
  ])
}
