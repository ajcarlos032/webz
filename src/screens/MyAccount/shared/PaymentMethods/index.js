import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AddCredits from './screens/AddCredits'
import PaymentMethods from './screens/PaymentMethods'
import AddNewPayment from './screens/AddNewPayment'

import { NAV_HEADER_OPTION } from '@root/constants'

const PaymentMethodsStack = createStackNavigator()

const PaymentMethodsStackStackScreen = () => {
  return (
    <PaymentMethodsStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <PaymentMethodsStack.Screen name="Home" component={AddCredits} />
      <PaymentMethodsStack.Screen name="PaymentMethods" component={PaymentMethods} />
      <PaymentMethodsStack.Screen name="AddNewPayment" component={AddNewPayment} />
    </PaymentMethodsStack.Navigator>
  )
}

PaymentMethodsStackStackScreen.propTypes = {}
PaymentMethodsStackStackScreen.defaultProps = {}

export default PaymentMethodsStackStackScreen
