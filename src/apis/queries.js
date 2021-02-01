import { gql } from '@apollo/client'

import {
  roomFields,
  userFields,
  bookingFields,
  reviewFields,
  teamFields,
  paymentMethodFields,
  packageFields,
} from './commonFields'

export const logInQuery = gql`
  query authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      success
      token
      message
      user {
        ${userFields}
      }
    }
  }
`

export const sendVerificationQuery = gql`
  query sendVerification($phone: String!) {
    sendVerification(phone: $phone)
  }
`

export const verifyOTPQuery = gql`
  query verify($code: Int!, $phone: String!, $test: Boolean) {
    verify(code: $code, phone: $phone, test: $test) {
      success
      token
      message
      user {
        ${userFields}
      }
    }
  }
`

export const meQuery = gql`
  query me {
    me {
      ${userFields}
    }
  }
`

export const favoriteRoomsQuery = gql`
  query favoriteRooms {
    favoriteRooms {
      ${roomFields}
    }
  }
`

export const reviewsQuery = gql`
  query reviews {
    reviews {
      ${reviewFields}
    }
  }
`

export const reviewQuery = gql`
  query review($id: ID!) {
    review(id: $id) {
      ${reviewFields}
    }
  }
`

export const bookingsQuery = gql`
  query bookings {
    bookings {
      ${bookingFields}
    }
  }
`

export const roomsQuery = gql`
  query rooms($first: Int!, $page: Int!) {
    rooms(orderBy: [{ field: "created_at", order: DESC }], first: $first, page: $page) {
      data {
        ${roomFields}
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`

export const searchRoomsQuery = gql`
query searchRoom($types: [ID], $seats:Int, $facilities:[ID], $start: DateTimeOrDate, $end: DateTimeOrDate, $name: String) {
  searchRoom(types: $types, seats: $seats, facilities: $facilities, start: $start, end: $end, name: $name) {
      ${roomFields}
    }
  }
`

export const roomTypesQuery = gql`
  query roomTypes($field: String!, $order: SortOrder!) {
    roomTypes(orderBy: [{ field: $field, order: $order }]) {
      id
      name
    }
  }
`

export const roomFacilitiesQuery = gql`
  query roomFacilities($field: String!, $order: SortOrder!) {
    roomFacilities(orderBy: [{ field: $field, order: $order }]) {
      id
      name
      icon
    }
  }
`

export const roomAttributesQuery = gql`
  query roomAttributes($field: String!, $order: SortOrder!) {
    roomAttributes(orderBy: [{ field: $field, order: $order }]) {
      id
      name
      unit_name
      price
    }
  }
`

export const roomQuery = gql`
  query room($id: ID!) {
    room(id: $id) {
      ${roomFields}
    }
  }
`

export const bookingQuery = gql`
  query booking($id: ID!) {
    booking(id: $id) {
      ${bookingFields}
    }
  }
`

export const faqCategoriesQuery = gql`
  query faq_categories {
    faq_categories {
      id
      name
    }
  }
`

export const faqsQuery = gql`
  query faqs($category_ids: [ID], $field: String!, $order: SortOrder!) {
    faqs(category_ids: $category_ids, orderBy: [{ field: $field, order: $order }]) {
      id
      question
      answer
      category {
        id
        name
      }
    }
  }
`

export const pushNotificationsQuery = gql`
  query pushNotifications($seen: Boolean!) {
    pushNotifications(seen: $seen) {
      id
      title
      body
      seen
      member_id
      created_at
      updated_at
    }
  }
`

export const myTeamsQuery = gql`
  query myTeams {
    myTeams {
      ${teamFields}
    }
  }
`

export const teamsQuery = gql`
  query teams {
    teams {
      ${teamFields}
    }
  }
`

export const teamQuery = gql`
  query teams($id: ID!) {
    team(id: $id) {
      ${teamFields}
    }
  }
`

export const ticketsActiveQuery = gql`
  query ticketsActive {
    ticketsActive {
      id
      support_specialist
      completed
      last_message
      messages_count
      created_at
      updated_at
    }
  }
`

export const ticketsCompleteQuery = gql`
  query ticketsComplete {
    ticketsComplete {
      id
      support_specialist
      completed
      last_message
      messages_count
      created_at
      updated_at
    }
  }
`

export const ticketsMessagesQuery = gql`
  query ticketMessages($id: ID!) {
    ticketMessages(id: $id) {
      id
      text
      is_member
      seen
      ticket_id
      created_at
      updated_at
    }
  }
`

export const creditsQuery = gql`
  query credits {
    credits {
      id
      amount
      price
    }
  }
`

export const transactionsQuery = gql`
  query transactions {
    transactions {
      id
      type
      credit
      price
      created_at
      member {
        id
        avatar_url
      }
      room {
        id
        name
      }
    }
  }
`

export const paymentMethodsQuery = gql`
  query paymentMethods {
    paymentMethods {
      ${paymentMethodFields}
    }
  }
`

export const unlockRoomQuery = gql`
  query unlockRoom($room_id: [ID]) {
    unlockRoom(room_id: $room_id)
  }
`

export const packagesQuery = gql`
  query packages {
    packages {
      ${packageFields}
    }
  }
`
