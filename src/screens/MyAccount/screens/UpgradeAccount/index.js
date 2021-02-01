import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import AccountDetail from './screens/AccountDetail'

import { NAV_HEADER_OPTION } from '@root/constants'

const UpgradeAccountStack = createStackNavigator()

const UpgradeAccountStackScreen = () => {
  return (
    <UpgradeAccountStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <UpgradeAccountStack.Screen name="Home" component={Home} />
      <UpgradeAccountStack.Screen name="AccountDetail" component={AccountDetail} />
    </UpgradeAccountStack.Navigator>
  )
}

UpgradeAccountStackScreen.propTypes = {}
UpgradeAccountStackScreen.defaultProps = {}

export default UpgradeAccountStackScreen
