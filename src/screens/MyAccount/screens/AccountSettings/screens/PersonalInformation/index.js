import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Password from './screens/Password'
import PhoneNumber from './screens/PhoneNumber'
import CarNumbers from './screens/CarNumbers'
import AddCarNumber from './screens/AddCarNumber'

import { NAV_HEADER_OPTION } from '@root/constants'

const PersonalInformationStack = createStackNavigator()

const PersonalInformationStackScreen = () => {
  return (
    <PersonalInformationStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <PersonalInformationStack.Screen name="Home" component={Home} />
      <PersonalInformationStack.Screen name="Password" component={Password} />
      <PersonalInformationStack.Screen name="PhoneNumber" component={PhoneNumber} />
      <PersonalInformationStack.Screen name="CarNumbers" component={CarNumbers} />
      <PersonalInformationStack.Screen name="AddCarNumber" component={AddCarNumber} />
    </PersonalInformationStack.Navigator>
  )
}

PersonalInformationStackScreen.propTypes = {}
PersonalInformationStackScreen.defaultProps = {}

export default PersonalInformationStackScreen
