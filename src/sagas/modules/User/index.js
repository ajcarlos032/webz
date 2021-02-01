import { all, takeLatest } from 'redux-saga/effects'
import { UserTypes } from '@store/User/Actions'

import me from './me'
import meSuccess from './me/success'
import meFailure from './me/failure'

import updateProfile from './updateProfile'
import updateProfileSuccess from './updateProfile/success'
import updateProfileFailure from './updateProfile/failure'

import updatePassword from './updatePassword'
import updatePasswordSuccess from './updatePassword/success'
import updatePasswordFailure from './updatePassword/failure'

import updatePhone from './updatePhone'
import updatePhoneSuccess from './updatePhone/success'
import updatePhoneFailure from './updatePhone/failure'

import addCarNumber from './carNumber/addCarNumber'
import addCarNumberSuccess from './carNumber/addCarNumber/success'
import addCarNumberFailure from './carNumber/addCarNumber/failure'

import setDefaultCarNumber from './carNumber/setDefaultCarNumber'
import setDefaultCarNumberSuccess from './carNumber/setDefaultCarNumber/success'
import setDefaultCarNumberFailure from './carNumber/setDefaultCarNumber/failure'

import deleteCarNumber from './carNumber/deleteCarNumber'
import deleteCarNumberSuccess from './carNumber/deleteCarNumber/success'
import deleteCarNumberFailure from './carNumber/deleteCarNumber/failure'

import fetchReviews from './fetchReviews'
import fetchReviewsSuccess from './fetchReviews/success'
import fetchReviewsFailure from './fetchReviews/failure'

import fetchReview from './fetchReview'
import fetchReviewSuccess from './fetchReview/success'
import fetchReviewFailure from './fetchReview/failure'

import messageToSupport from './messageToSupport'
import messageToSupportSuccess from './messageToSupport/success'
import messageToSupportFailure from './messageToSupport/failure'

import ticketMessages from './ticketMessages'
import ticketMessagesSuccess from './ticketMessages/success'
import ticketMessagesFailure from './ticketMessages/failure'

import ticketsActive from './tickets/ticketsActive'
import ticketsActiveSuccess from './tickets/ticketsActive/success'
import ticketsActiveFailure from './tickets/ticketsActive/failure'

import ticketsComplete from './tickets/ticketComplete'
import ticketsCompleteSuccess from './tickets/ticketComplete/success'
import ticketsCompleteFailure from './tickets/ticketComplete/failure'

import addCredits from './credit/addCredits'
import addCreditsSuccess from './credit/addCredits/success'
import addCreditsFailure from './credit/addCredits/failure'

import fetchCredits from './credit/fetchCredits'
import fetchCreditsSuccess from './credit/fetchCredits/success'
import fetchCreditsFailure from './credit/fetchCredits/failure'

import addPaymentMethod from './paymentMethod/addPaymentMethod'
import addPaymentMethodSuccess from './paymentMethod/addPaymentMethod/success'
import addPaymentMethodFailure from './paymentMethod/addPaymentMethod/failure'

import choosePaymentMethod from './paymentMethod/choosePaymentMethod'
import choosePaymentMethodSuccess from './paymentMethod/choosePaymentMethod/success'
import choosePaymentMethodFailure from './paymentMethod/choosePaymentMethod/failure'

import deletePaymentMethod from './paymentMethod/deletePaymentMethod'
import deletePaymentMethodSuccess from './paymentMethod/deletePaymentMethod/success'
import deletePaymentMethodFailure from './paymentMethod/deletePaymentMethod/failure'

import fetchPaymentMethods from './paymentMethod/fetchPaymentMethods'
import fetchPaymentMethodsSuccess from './paymentMethod/fetchPaymentMethods/success'
import fetchPaymentMethodsFailure from './paymentMethod/fetchPaymentMethods/failure'

import fetchTransactions from './fetchTransactions'
import fetchTransactionsSuccess from './fetchTransactions/success'
import fetchTransactionsFailure from './fetchTransactions/failure'

import fetchPackages from './package/fetchPackages'
import fetchPackagesSuccess from './package/fetchPackages/success'
import fetchPackagesFailure from './package/fetchPackages/failure'

import choosePackage from './package/choosePackage'
import choosePackageSuccess from './package/choosePackage/success'
import choosePackageFailure from './package/choosePackage/failure'

export default function* root() {
  yield all([
    // Fetch Me.
    takeLatest(UserTypes.ME, me),
    takeLatest(UserTypes.ME_SUCCESS, meSuccess),
    takeLatest(UserTypes.ME_FAILURE, meFailure),

    // Update profile.
    takeLatest(UserTypes.UPDATE_PROFILE, updateProfile),
    takeLatest(UserTypes.UPDATE_PROFILE_SUCCESS, updateProfileSuccess),
    takeLatest(UserTypes.UPDATE_PROFILE_FAILURE, updateProfileFailure),

    // Update phone.
    takeLatest(UserTypes.UPDATE_PHONE, updatePhone),
    takeLatest(UserTypes.UPDATE_PHONE_SUCCESS, updatePhoneSuccess),
    takeLatest(UserTypes.UPDATE_PHONE_FAILURE, updatePhoneFailure),

    // Update password.
    takeLatest(UserTypes.UPDATE_PASSWORD, updatePassword),
    takeLatest(UserTypes.UPDATE_PASSWORD_SUCCESS, updatePasswordSuccess),
    takeLatest(UserTypes.UPDATE_PASSWORD_FAILURE, updatePasswordFailure),

    // Add car number.
    takeLatest(UserTypes.ADD_CAR_NUMBER, addCarNumber),
    takeLatest(UserTypes.ADD_CAR_NUMBER_SUCCESS, addCarNumberSuccess),
    takeLatest(UserTypes.ADD_CAR_NUMBER_FAILURE, addCarNumberFailure),

    // Set default car number.
    takeLatest(UserTypes.SET_DEFAULT_CAR_NUMBER, setDefaultCarNumber),
    takeLatest(UserTypes.SET_DEFAULT_CAR_NUMBER_SUCCESS, setDefaultCarNumberSuccess),
    takeLatest(UserTypes.SET_DEFAULT_CAR_NUMBER_FAILURE, setDefaultCarNumberFailure),

    // Delete car number.
    takeLatest(UserTypes.DELETE_CAR_NUMBER, deleteCarNumber),
    takeLatest(UserTypes.DELETE_CAR_NUMBER_SUCCESS, deleteCarNumberSuccess),
    takeLatest(UserTypes.DELETE_CAR_NUMBER_FAILURE, deleteCarNumberFailure),

    // Reviews.
    takeLatest(UserTypes.FETCH_REVIEWS, fetchReviews),
    takeLatest(UserTypes.FETCH_REVIEWS_SUCCESS, fetchReviewsSuccess),
    takeLatest(UserTypes.FETCH_REVIEWS_FAILURE, fetchReviewsFailure),

    // Review.
    takeLatest(UserTypes.FETCH_REVIEW, fetchReview),
    takeLatest(UserTypes.FETCH_REVIEW_SUCCESS, fetchReviewSuccess),
    takeLatest(UserTypes.FETCH_REVIEW_FAILURE, fetchReviewFailure),

    // Message to support / create ticket.
    takeLatest(UserTypes.MESSAGE_TO_SUPPORT, messageToSupport),
    takeLatest(UserTypes.MESSAGE_TO_SUPPORT_SUCCESS, messageToSupportSuccess),
    takeLatest(UserTypes.MESSAGE_TO_SUPPORT_FAILURE, messageToSupportFailure),

    // Fetch ticket messages.
    takeLatest(UserTypes.TICKET_MESSAGES, ticketMessages),
    takeLatest(UserTypes.TICKET_MESSAGES_SUCCESS, ticketMessagesSuccess),
    takeLatest(UserTypes.TICKET_MESSAGES_FAILURE, ticketMessagesFailure),

    // Fetch active tickets.
    takeLatest(UserTypes.TICKETS_ACTIVE, ticketsActive),
    takeLatest(UserTypes.TICKETS_ACTIVE_SUCCESS, ticketsActiveSuccess),
    takeLatest(UserTypes.TICKETS_ACTIVE_FAILURE, ticketsActiveFailure),

    // Fetch completed tickets.
    takeLatest(UserTypes.TICKETS_COMPLETE, ticketsComplete),
    takeLatest(UserTypes.TICKETS_COMPLETE_SUCCESS, ticketsCompleteSuccess),
    takeLatest(UserTypes.TICKETS_COMPLETE_FAILURE, ticketsCompleteFailure),

    // Add credits.
    takeLatest(UserTypes.ADD_CREDITS, addCredits),
    takeLatest(UserTypes.ADD_CREDITS_SUCCESS, addCreditsSuccess),
    takeLatest(UserTypes.ADD_CREDITS_FAILURE, addCreditsFailure),

    // Fetch credits.
    takeLatest(UserTypes.FETCH_CREDITS, fetchCredits),
    takeLatest(UserTypes.FETCH_CREDITS_SUCCESS, fetchCreditsSuccess),
    takeLatest(UserTypes.FETCH_CREDITS_FAILURE, fetchCreditsFailure),

    // Add payment method.
    takeLatest(UserTypes.ADD_PAYMENT_METHOD, addPaymentMethod),
    takeLatest(UserTypes.ADD_PAYMENT_METHOD_SUCCESS, addPaymentMethodSuccess),
    takeLatest(UserTypes.ADD_PAYMENT_METHOD_FAILURE, addPaymentMethodFailure),

    // Choose payment method.
    takeLatest(UserTypes.CHOOSE_PAYMENT_METHOD, choosePaymentMethod),
    takeLatest(UserTypes.CHOOSE_PAYMENT_METHOD_SUCCESS, choosePaymentMethodSuccess),
    takeLatest(UserTypes.CHOOSE_PAYMENT_METHOD_FAILURE, choosePaymentMethodFailure),

    // Delete payment method.
    takeLatest(UserTypes.DELETE_PAYMENT_METHOD, deletePaymentMethod),
    takeLatest(UserTypes.DELETE_PAYMENT_METHOD_SUCCESS, deletePaymentMethodSuccess),
    takeLatest(UserTypes.DELETE_PAYMENT_METHOD_FAILURE, deletePaymentMethodFailure),

    // Fetch payment methods.
    takeLatest(UserTypes.FETCH_PAYMENT_METHODS, fetchPaymentMethods),
    takeLatest(UserTypes.FETCH_PAYMENT_METHODS_SUCCESS, fetchPaymentMethodsSuccess),
    takeLatest(UserTypes.FETCH_PAYMENT_METHODS_FAILURE, fetchPaymentMethodsFailure),

    // Fetch payment methods.
    takeLatest(UserTypes.FETCH_TRANSACTIONS, fetchTransactions),
    takeLatest(UserTypes.FETCH_TRANSACTIONS_SUCCESS, fetchTransactionsSuccess),
    takeLatest(UserTypes.FETCH_TRANSACTIONS_FAILURE, fetchTransactionsFailure),

    // Fetch packages.
    takeLatest(UserTypes.FETCH_PACKAGES, fetchPackages),
    takeLatest(UserTypes.FETCH_PACKAGES_SUCCESS, fetchPackagesSuccess),
    takeLatest(UserTypes.FETCH_PACKAGES_FAILURE, fetchPackagesFailure),

    // Choose package.
    takeLatest(UserTypes.CHOOSE_PACKAGE, choosePackage),
    takeLatest(UserTypes.CHOOSE_PACKAGE_SUCCESS, choosePackageSuccess),
    takeLatest(UserTypes.CHOOSE_PACKAGE_FAILURE, choosePackageFailure),
  ])
}
