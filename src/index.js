import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Host } from 'react-native-portalize'
import { RootSiblingParent } from 'react-native-root-siblings'

import { authSelector } from '@store/Auth/Select'
import BookingActions from '@store/Booking/Actions'
import OfficeActions from '@store/Office/Actions'
import UserActions from '@store/User/Actions'
import NotificationActions from '@store/Notification/Actions'

import ThemeContext from '@root/ThemeContext'

import AppNavigator from '@navigation/AppNavigator'
import AuthNavigator from '@navigation/AuthNavigator'

import { DEFAULT_STATUSBAR } from '@theme/colors'

const MyApp = () => {
  const dispatch = useDispatch()

  const [theme, setTheme] = useState({
    showTabBar: true,
    statusBarColor: DEFAULT_STATUSBAR,
    statusBarStyle: 'dark-content',
  })
  const { authenticated } = useSelector(authSelector)

  useEffect(() => {
    if (authenticated) {
      dispatch(UserActions.me())
      dispatch(BookingActions.fetchBookings())
      dispatch(OfficeActions.fetchRoomAttributes())
      dispatch(OfficeActions.fetchRoomFacilities())
      dispatch(OfficeActions.fetchRoomTypes())
      dispatch(NotificationActions.fetchNewNotifications())
      dispatch(NotificationActions.fetchOldNotifications())
    }
  }, [authenticated, dispatch])

  const changeTheme = useCallback((variables) => {
    setTheme((_theme) => ({ ..._theme, ...variables }))
  }, [])

  return (
    <RootSiblingParent>
      <Host>
        <ThemeContext.Provider value={{ ...theme, changeTheme }}>
          <StatusBar
            translucent
            barStyle={theme.statusBarStyle}
            backgroundColor={DEFAULT_STATUSBAR}
          />
          {authenticated ? <AppNavigator /> : <AuthNavigator />}
        </ThemeContext.Provider>
      </Host>
    </RootSiblingParent>
  )
}

MyApp.propTypes = {}
MyApp.defaultProps = {}

export default MyApp
