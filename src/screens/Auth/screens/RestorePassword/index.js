import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import RestoreEmail from './screens/RestoreEmail'
import RestoreForm from './screens/RestoreForm'

import { NAV_HEADER_OPTION } from '@root/constants'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestoreEmail" component={RestoreEmail} />
      <Stack.Screen name="RestoreForm" component={RestoreForm} />
    </Stack.Navigator>
  )
}

HomeNavigator.propTypes = {}
HomeNavigator.defaultProps = {}

export default HomeNavigator
