import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Favorites from './screens/Favorites'

import { NAV_HEADER_OPTION } from '@root/constants'

const OfficeStack = createStackNavigator()

const OfficeStackScreen = () => {
  return (
    <OfficeStack.Navigator initialRouteName="Favorites" screenOptions={NAV_HEADER_OPTION}>
      <OfficeStack.Screen name="Favorites" component={Favorites} />
    </OfficeStack.Navigator>
  )
}

OfficeStackScreen.propTypes = {}
OfficeStackScreen.defaultProps = {}

export default OfficeStackScreen
