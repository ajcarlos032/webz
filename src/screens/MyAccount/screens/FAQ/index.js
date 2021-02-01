import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import FAQView from './screens/FAQView'

import { NAV_HEADER_OPTION } from '@root/constants'

const MyReviewsStack = createStackNavigator()

const MyReviewsStackScreen = () => {
  return (
    <MyReviewsStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <MyReviewsStack.Screen name="Home" component={Home} />
      <MyReviewsStack.Screen name="FAQView" component={FAQView} />
    </MyReviewsStack.Navigator>
  )
}

MyReviewsStackScreen.propTypes = {}
MyReviewsStackScreen.defaultProps = {}

export default MyReviewsStackScreen
