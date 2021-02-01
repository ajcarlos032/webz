import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Bookings from './screens/Home'
import ActiveBookingRoom from './screens/ActiveBookingRoom'
import RoomLocationN3d from '@screens/Offices/shared/roomLocationN3d'

import { NAV_HEADER_OPTION } from '@root/constants'

const BookingStack = createStackNavigator()

const BookingStackScreen = () => {
  return (
    <BookingStack.Navigator initialRouteName="Bookings" screenOptions={NAV_HEADER_OPTION}>
      <BookingStack.Screen name="Bookings" component={Bookings} />
      <BookingStack.Screen name="ActiveBookingRoom" component={ActiveBookingRoom} />
      <BookingStack.Screen name="RoomLocationN3d" component={RoomLocationN3d} />
    </BookingStack.Navigator>
  )
}

BookingStackScreen.propTypes = {}
BookingStackScreen.defaultProps = {}

export default BookingStackScreen
