import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import More from './screens/Home'
import ComingSoon from './screens/ComingSoon'

import { NAV_HEADER_OPTION } from '@root/constants'

const MyAccountStack = createStackNavigator()

const MyAccountStackScreen = () => {
  return (
    <MyAccountStack.Navigator initialRouteName="More" screenOptions={NAV_HEADER_OPTION}>
      <MyAccountStack.Screen name="More" component={More} />
      <MyAccountStack.Screen name="ComingSoon" component={ComingSoon} />
    </MyAccountStack.Navigator>
  )
}

MyAccountStackScreen.propTypes = {}
MyAccountStackScreen.defaultProps = {}

export default MyAccountStackScreen
