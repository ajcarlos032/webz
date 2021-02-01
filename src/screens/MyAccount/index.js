import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyAccount from './screens/Home'
import Teams from './screens/Teams'
import SupportCenter from './screens/SupportCenter'
import AccountSettings from './screens/AccountSettings'
import UpgradeAccount from './screens/UpgradeAccount'
import TransactionHistory from './screens/TransactionHistory'
import MyReviews from './screens/MyReviews'
import FAQ from './screens/FAQ'
import PaymentMethods from '@screens/MyAccount/shared/PaymentMethods'

import { NAV_HEADER_OPTION } from '@root/constants'

const MyAccountStack = createStackNavigator()

const MyAccountStackScreen = () => {
  return (
    <MyAccountStack.Navigator initialRouteName="MyAccount" screenOptions={NAV_HEADER_OPTION}>
      <MyAccountStack.Screen name="MyAccount" component={MyAccount} />
      <MyAccountStack.Screen name="Teams" component={Teams} />
      <MyAccountStack.Screen name="SupportCenter" component={SupportCenter} />
      <MyAccountStack.Screen name="AccountSettings" component={AccountSettings} />
      <MyAccountStack.Screen name="UpgradeAccount" component={UpgradeAccount} />
      <MyAccountStack.Screen name="TransactionHistory" component={TransactionHistory} />
      <MyAccountStack.Screen name="MyReviews" component={MyReviews} />
      <MyAccountStack.Screen name="PaymentMethods" component={PaymentMethods} />
      <MyAccountStack.Screen name="FAQ" component={FAQ} />
    </MyAccountStack.Navigator>
  )
}

MyAccountStackScreen.propTypes = {}
MyAccountStackScreen.defaultProps = {}

export default MyAccountStackScreen
