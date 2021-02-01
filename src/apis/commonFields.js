export const roomFields = `
  id
  name
  price
  seats
  overview
  location
  status
  available_at
  average_rate
  rates_count
  is_favorite
  wifi_ssid
  wifi_pass
  qr_token
  main_image {
    id
    url
  }
  type {
    id
    name
  }
  facilities {
    id
    name
    icon
  }
  reviews {
    id
    member_avatar_url
    member_name
    description
    rate
  }
  images {
    id
    url
  }
`

export const bookingFields = `
  id
  room_id
  member_id
  start_date
  end_date
  price
  status
  status_name
  door_key
  similar_room {
    id
  }
  room_attributes {
    id
    name
    unit_name
    price
    pivot {
      quantity
    }
  }
  room {
    ${roomFields}
  }
  logo {
    id
    url
    is_logo
  }
`

export const packageFields = `
  id
  name
  price
  privileges
`

export const userFields = `
  id
  name
  email
  phone
  avatar_url
  status
  balance
  favorites_count
  car_number
  car_numbers {
    id
    number
    default
    label
  }
  logos {
    is_logo
    url
    id
  }
  package {
    ${packageFields}
  }
`

export const reviewFields = `
  id
  booking_id
  room_id
  room_name
  member_id
  member_name
  member_avatar_url
  date_from
  date_to
  description
  rate
  created_at
  room {
    id
    name
    images {
      id
      url
    }
  }
`

export const teamFields = `
  id
  title
  owner{
    id
    name
    phone
  }
  members {
    id
    phone
    name
    avatar {
      url
    }
    pivot {
      phone
      joined
    }
  }
  booking_id
  booking {
    ${bookingFields}
  }
  created_at
`

export const logoFields = `
  id
  url
  is_logo
`

export const paymentMethodFields = `
  id
  type
  mode
  identifier
  service
  card_number
  created_at
  updated_at
`
