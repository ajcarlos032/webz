import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Ticket from './screens/Ticket'

import { NAV_HEADER_OPTION } from '@root/constants'

const SupportCenterStack = createStackNavigator()

const SupportCenterStackScreen = () => {
  return (
    <SupportCenterStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <SupportCenterStack.Screen name="Home" component={Home} />
      <SupportCenterStack.Screen name="Ticket" component={Ticket} />
    </SupportCenterStack.Navigator>
  )
}

SupportCenterStackScreen.propTypes = {}
SupportCenterStackScreen.defaultProps = {}

export default SupportCenterStackScreen
