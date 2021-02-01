import { gql } from '@apollo/client'

import {
  userFields,
  roomFields,
  bookingFields,
  teamFields,
  logoFields,
  packageFields,
} from './commonFields'

export const signupMutation = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $password: String
    $password_confirmation: String
  ) {
    signUp(
      name: $name
      email: $email
      password: $password
      password_confirmation: $password_confirmation
    ) {
      token
      message
      success
      user {
        ${userFields}
      }
    }
  }
`

export const restorePasswordMutation = gql`
  mutation restorePassword($email: String, $phone: String, $test: Boolean) {
    restorePassword(email: $email, phone: $phone, test: $test) {
      message
      success
    }
  }
`

export const verifyPhoneForRestorePasswordMutation = gql`
  mutation verifyPhone($phone: String!, $code: Int!, $test: Boolean) {
    verifyPhone(phone: $phone, code: $code, test: $test) {
      message
      success
      reset_token
    }
  }
`

export const setNewPasswordMutation = gql`
  mutation newPassword(
    $token: String
    $new_password: String!
    $password_confirmation: String!
  ) {
    newPassword(
      token: $token
      new_password: $new_password
      password_confirmation: $password_confirmation
    ) {
      message
      success
      token
      user {
        ${userFields}
       }
    }
  }
`

export const updateProfileMutation = gql`
  mutation updateProfile(
    $name: String!
    $email: String!
    $avatar: Upload
  ) {
    updateProfile(name: $name, email: $email avatar: $avatar) {
      message
      success
      user {
       ${userFields}
      }
    }
  }
`

export const updatePasswordMutation = gql`
  mutation updatePassword(
    $old_password: String!
    $new_password: String!
    $password_confirmation: String!
  ) {
    updatePassword(
      old_password: $old_password
      new_password: $new_password
      password_confirmation: $password_confirmation
    ) {
      message
      success
    }
  }
`

export const updatePhoneMutation = gql`
  mutation updatePhone($first: Boolean!, $phone: String!, $code: Int) {
    updatePhone(first: $first, phone: $phone, code: $code) {
      message
      success
    }
  }
`

export const createCarNumberMutation = gql`
  mutation createCarNumber($number: String!, $label: String!) {
    createCarNumber(number: $number, label: $label) {
      id
      number
      default
      label
    }
  }
`

export const setDefaultCarNumberMutation = gql`
  mutation setDefaultCarNumber($id: ID!) {
    setDefaultCarNumber(id: $id) {
      id
      number
      default
      label
    }
  }
`

export const deleteCarNumberMutation = gql`
  mutation deleteCarNumber($id: ID!) {
    deleteCarNumber(id: $id)
  }
`

export const createBookingMutation = gql`
  mutation createBooking(
    $room_id: ID!
    $start_date: DateTimeOrDate!
    $end_date: DateTimeOrDate!
    $attributes: [BookingAttribute]
  ) {
    createBooking(
      room_id: $room_id
      start_date: $start_date
      end_date: $end_date
      attributes: $attributes
    ) {
      ${bookingFields}
    }
  }
`

export const cancelBookingMutation = gql`
  mutation cancelBooking($id: ID!) {
    cancelBooking(id: $id) {
      message
      success
    }
  }
`

export const continueBookingMutation = gql`
  mutation continueBooking($id: ID!) {
    continueBooking(id: $id)
  }
`

export const completeBookingMutation = gql`
  mutation completeBooking($id: ID!) {
    completeBooking(id: $id)
  }
`

export const completeBookingNotifyMutation = gql`
  mutation completeBookingNotify($id: ID!) {
    completeBookingNotify(id: $id)
  }
`

export const completeAllBookingsMutation = gql`
  mutation completeAllBookings {
    completeAllBookings {
      booking_id
      updated
      push
    }
  }
`

export const makeRoomFavoriteMutation = gql`
  mutation makeRoomFavorite($room_id: ID!) {
    makeRoomFavorite(id: $room_id) {
      ${roomFields}
    }
  }
`

export const uploadLogosMutation = gql`
  mutation uploadLogos($logos: [Upload!]) {
    uploadLogos(logos: $logos) {
      ${logoFields}
    }
  }
`

export const uploadLogoMutation = gql`
  mutation useLogo($booking_id: ID!, $logo_id: ID!) {
    useLogo(booking_id: $booking_id, logo_id: $logo_id) {
      ${logoFields}
    }
  }
`

export const createReviewMutation = gql`
  mutation createReview($room_id: ID!, $booking_id: ID!, $description: String, $rate: Float!) {
    createReview(
      room_id: $room_id
      booking_id: $booking_id
      description: $description
      rate: $rate
    ) {
      id
      room_id
      booking_id
      description
      rate
    }
  }
`

export const updateReviewMutation = gql`
  mutation updateReview($id: ID!, $description: String, $rate: Float!) {
    updateReview(id: $id, description: $description, rate: $rate) {
      id
      room_id
      booking_id
      description
      rate
    }
  }
`

export const makeNotificationSeenMutation = gql`
  mutation makeNotificationSeen($id: ID!) {
    makeNotificationSeen(id: $id)
  }
`

export const registerFCMTokenMutation = gql`
  mutation updateToken($token: String!) {
    updateToken(token: $token)
  }
`

export const createTeamMutation = gql`
  mutation createTeam($title: String!, $phone_numbers: [String!]) {
    createTeam(title: $title, phone_numbers: $phone_numbers) {
      ${teamFields}
    }
  }
`

export const addTeamMemberMutation = gql`
  mutation addTeamMember($team_id: ID!, $phone_numbers: [String!]) {
    addTeamMember(team_id: $team_id, phone_numbers: $phone_numbers) {
      ${teamFields}
    }
  }
`

export const attachBookingToTeamMutation = gql`
  mutation attachBookingToTeam($team_id: ID!, $booking_id: ID!) {
    attachBookingToTeam(team_id: $team_id, booking_id: $booking_id) {
      ${teamFields}
    }
  }
`

export const sendMessageToSupportMutation = gql`
  mutation sendMessageToSupport($text: String!, $ticket_id: ID) {
    sendMessageToSupport(text: $text, ticket_id: $ticket_id) {
      message
      success
    }
  }
`

export const addPaymentMethodMutation = gql`
  mutation addPaymentMethod(
    $type: String
    $mode: String
    $identifier: String
    $service: String
    $card_number: String
  ) {
    addPaymentMethod(
      type: $type
      mode: $mode
      identifier: $identifier
      service: $service
      card_number: $card_number
    ) {
      id
      type
      mode
      identifier
      service
      card_number
      created_at
      updated_at
    }
  }
`

export const choosePaymentMethodMutation = gql`
  mutation choosePaymentMethod($method_id: ID!) {
    choosePaymentMethod(method_id: $method_id) {
      id
      type
      mode
      identifier
      service
      card_number
    }
  }
`

export const deletePaymentMethodMutation = gql`
  mutation deletePaymentMethod($method_id: ID!) {
    deletePaymentMethod(method_id: $method_id)
  }
`

export const addCreditsMutation = gql`
  mutation addCredits($method_id: ID!, $credit_id: ID, $amount: Float) {
    addCredits(method_id: $method_id, credit_id: $credit_id, amount: $amount)
  }
`

export const locationStateMutation = gql`
  mutation locationState($out: Boolean!) {
    locationState(out: $out)
  }
`

export const choosePackageMutation = gql`
  mutation choosePackage($id: ID!) {
    choosePackage(id: $id) {
      ${packageFields}
    }
  }
`

export const sameTypeRoomAvailableMutation = gql`
  mutation sameTypeRoomAvailable($id: ID!, $start_date: DateTimeOrDate, $end_date: DateTimeOrDate) {
    sameTypeRoomAvailable(id: $id, start_date: $start_date, end_date: $end_date) {
      id
    }
  }
`
