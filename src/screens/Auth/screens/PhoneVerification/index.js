import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'

import PhoneNumber from './screens/PhoneNumber'
import VerifyCode from './screens/VerifyCode'

import { NAV_HEADER_OPTION } from '@root/constants'

const Stack = createStackNavigator()

const HomeNavigator = ({ route }) => {
  return (
    <Stack.Navigator initialRouteName="PhoneNumber" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen
        name="PhoneNumber"
        component={PhoneNumber}
        initialParams={{ ...route.params }}
      />
      <Stack.Screen name="VerifyCode" component={VerifyCode} initialParams={{ ...route.params }} />
    </Stack.Navigator>
  )
}

HomeNavigator.propTypes = {
  route: PropTypes.object.isRequired,
}
HomeNavigator.defaultProps = {}

export default HomeNavigator
