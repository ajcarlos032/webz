/* eslint-disable no-unused-vars */
/* eslint-disable sort-keys */
import {
  logIn,
  signup,
  restorePassword,
  setNewPassword,
  verificationCode,
  verifyPhoneForRestorePassword,
} from './modules/Auth'

import {
  fetchRooms,
  fetchRoom,
  searchRooms,
  favoriteRooms,
  fetchRoomTypes,
  fetchRoomFacilities,
  fetchRoomAttributes,
  likeRoom,
  unlockRoom,
} from './modules/Office'

import {
  me,
  updateProfile,
  updatePassword,
  updatePhone,
  addCarNumber,
  setDefaultCarNumber,
  deleteCarNumber,
  fetchReviews,
  fetchReview,
  messageToSupport,
  ticketsActive,
  ticketsComplete,
  ticketMessages,
  fetchCredits,
  fetchTransactions,
  fetchPaymentMethods,
  addPaymentMethod,
  choosePaymentMethod,
  deletePaymentMethod,
  addCredits,
  packages,
  choosePackage,
} from './modules/User'

import {
  fetchBookings,
  fetchBooking,
  createBooking,
  cancelBooking,
  continueBooking,
  completeBooking,
  completeBookingNotify,
  completeAllBookings,
  createReview,
  updateReview,
  uploadLogos,
  useLogo,
  locationState,
  checkRoomExtendable,
} from './modules/Booking'

import { fetchFaqCategories, fetchFaqs } from './modules/Faq'

import { registerFCMToken, fetchNotifications, makeNotificationSeen } from './modules/Notification'

import {
  fetchMyTeams,
  fetchTeams,
  fetchTeam,
  createTeam,
  addTeamMember,
  attachBookingToTeam,
} from './modules/Team'

export default {
  logIn,
  signup,
  restorePassword,
  setNewPassword,
  verificationCode,
  verifyPhoneForRestorePassword,
  me,
  updateProfile,
  updatePassword,
  updatePhone,
  addCarNumber,
  setDefaultCarNumber,
  deleteCarNumber,
  fetchReviews,
  fetchReview,
  messageToSupport,
  ticketsActive,
  ticketsComplete,
  ticketMessages,
  fetchCredits,
  fetchTransactions,
  fetchPaymentMethods,
  addPaymentMethod,
  addCredits,
  packages,
  choosePackage,
  favoriteRooms,
  fetchBookings,
  fetchRooms,
  fetchRoom,
  searchRooms,
  fetchRoomTypes,
  fetchRoomFacilities,
  fetchRoomAttributes,
  createBooking,
  cancelBooking,
  uploadLogos,
  useLogo,
  likeRoom,
  unlockRoom,
  createReview,
  continueBooking,
  completeBookingNotify,
  completeAllBookings,
  completeBooking,
  updateReview,
  fetchBooking,
  fetchFaqCategories,
  fetchFaqs,
  registerFCMToken,
  fetchNotifications,
  makeNotificationSeen,
  fetchMyTeams,
  fetchTeams,
  fetchTeam,
  createTeam,
  addTeamMember,
  attachBookingToTeam,
  locationState,
  checkRoomExtendable,
}
