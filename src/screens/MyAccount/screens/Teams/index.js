import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Team from './screens/Team'

import { NAV_HEADER_OPTION } from '@root/constants'

const TeamsStack = createStackNavigator()

const TeamsStackScreen = () => {
  return (
    <TeamsStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <TeamsStack.Screen name="Home" component={Home} />
      <TeamsStack.Screen name="Team" component={Team} />
    </TeamsStack.Navigator>
  )
}

TeamsStackScreen.propTypes = {}
TeamsStackScreen.defaultProps = {}

export default TeamsStackScreen
