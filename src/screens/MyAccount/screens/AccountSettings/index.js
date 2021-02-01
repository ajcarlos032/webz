import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import PersonalInformation from './screens/PersonalInformation'
import MyLogos from './screens/MyLogos'
import Language from './screens/Language'

import { NAV_HEADER_OPTION } from '@root/constants'

const AccountSettingsStack = createStackNavigator()

const AccountSettingsStackScreen = () => {
  return (
    <AccountSettingsStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <AccountSettingsStack.Screen name="Home" component={Home} />
      <AccountSettingsStack.Screen name="PersonalInformation" component={PersonalInformation} />
      <AccountSettingsStack.Screen name="MyLogos" component={MyLogos} />
      <AccountSettingsStack.Screen name="Language" component={Language} />
    </AccountSettingsStack.Navigator>
  )
}

AccountSettingsStackScreen.propTypes = {}
AccountSettingsStackScreen.defaultProps = {}

export default AccountSettingsStackScreen
