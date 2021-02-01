import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ThemeContext from '@root/ThemeContext'

import { NAV_HEADER_OPTION } from '@root/constants'

import Welcome from '@screens/Auth/screens/Welcome'
import SignUp from '@screens/Auth/screens/SignUp'
import SignUpSuccess from '@screens/Auth/screens/SignUpSuccess'
import Login from '@screens/Auth/screens/Login'
import RestorePassword from '@screens/Auth/screens/RestorePassword'
import PhoneVerification from '@screens/Auth/screens/PhoneVerification'

import { DEFAULT_STATUSBAR } from '@theme/colors'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  const { changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    changeTheme({
      statusBarColor: DEFAULT_STATUSBAR,
      statusBarStyle: 'dark-content',
    })
  }, [changeTheme])

  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RestorePassword" component={RestorePassword} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
    </Stack.Navigator>
  )
}

AuthNavigator.propTypes = {}
AuthNavigator.defaultProps = {}

export default AuthNavigator
