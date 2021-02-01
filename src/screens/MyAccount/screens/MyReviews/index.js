import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Review from './screens/Review'

import { NAV_HEADER_OPTION } from '@root/constants'

const MyReviewsStack = createStackNavigator()

const MyReviewsStackScreen = () => {
  return (
    <MyReviewsStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <MyReviewsStack.Screen name="Home" component={Home} />
      <MyReviewsStack.Screen name="Review" component={Review} />
    </MyReviewsStack.Navigator>
  )
}

MyReviewsStackScreen.propTypes = {}
MyReviewsStackScreen.defaultProps = {}

export default MyReviewsStackScreen
