/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { camelCase } from 'lodash-es'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'
import { activeBookingsSelector, extendedBookingsSelector } from '@store/User/Select'

import FavoritesStack from '@screens/Home'
import OfficesStack from '@screens/Offices'
import MyBookingsStack from '@screens/MyBookings'
import MyAccountStack from '@screens/MyAccount'
import MoreStack from '@screens/More'
import Notifications from '@screens/Notifications'
import OpenDoor from '@screens/OpenDoor'

import NotificationService from '../../Notification/NotificationService'
import GeoFence from '../../GeoFence'

import { RH } from '@theme/utils'
import { NAV_HEADER_OPTION, IS_IOS } from '@root/constants'
import { DARK_BLUE, DEFAULT_STATUSBAR, TRANSPARENT, WHITE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_XS } from '@theme/fonts'

const homeIconActive = require('@assets/icons/ic_favorite_active.png')
const homeIconInActive = require('@assets/icons/ic_favorite_inactive.png')

const officeIconActive = require('@assets/icons/ic_office_active.png')
const officeIconInActive = require('@assets/icons/ic_office_inactive.png')

const bookingsIconActive = require('@assets/icons/ic_bookings_active.png')
const bookingsIconInActive = require('@assets/icons/ic_bookings_inactive.png')

const userIconActive = require('@assets/icons/ic_user_active.png')
const userIconInActive = require('@assets/icons/ic_user_inactive.png')

const moreIconActive = require('@assets/icons/ic_more_active.png')
const moreIconInActive = require('@assets/icons/ic_more_inactive.png')

const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const { t } = useContext(I18nContext)
  const { showTabBar } = useContext(ThemeContext)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          let icon

          if (route.name === 'Favorites') {
            icon = focused ? homeIconActive : homeIconInActive
          } else if (route.name === 'Offices') {
            icon = focused ? officeIconActive : officeIconInActive
          } else if (route.name === 'MyBookings') {
            icon = focused ? bookingsIconActive : bookingsIconInActive
          } else if (route.name === 'MyAccount') {
            icon = focused ? userIconActive : userIconInActive
          } else if (route.name === 'More') {
            icon = focused ? moreIconActive : moreIconInActive
          }

          return (
            <View style={styles.tab}>
              <Image source={icon} style={styles.tabIcon} resizeMode="contain" />
              <Text style={[styles.tabLabel, focused && styles.tabFocused]}>
                {t(`common.${camelCase(route.name)}`)}
              </Text>
            </View>
          )
        },
        tabBarVisible: showTabBar,
      })}
      tabBarOptions={{
        activeTintColor: YELLOW,
        inactiveTintColor: DARK_BLUE,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: styles.tabBar,
      }}
    >
      <Tab.Screen name="Favorites" component={FavoritesStack} />
      <Tab.Screen name="Offices" component={OfficesStack} />
      <Tab.Screen name="MyBookings" component={MyBookingsStack} />
      <Tab.Screen name="MyAccount" component={MyAccountStack} />
      {/* <Tab.Screen name="More" component={MoreStack} /> */}
    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  const { changeTheme, showTabBar } = useContext(ThemeContext)
  const activeBookings = useSelector(activeBookingsSelector)
  const extendedBookings = useSelector(extendedBookingsSelector)

  useEffect(() => {
    const isActive = Boolean(activeBookings?.length)
    changeTheme({
      statusBarColor: isActive ? YELLOW : DEFAULT_STATUSBAR,
      statusBarStyle: isActive && !IS_IOS ? 'light-content' : 'dark-content',
    })
  }, [changeTheme, showTabBar, activeBookings?.length])

  const GeoFenceService = useMemo(() => <GeoFence enabled={Boolean(extendedBookings.length)} />, [
    extendedBookings.length,
  ])

  return (
    <NotificationService>
      {GeoFenceService}
      <AppStack.Navigator initialRouteName="TabNavigator" screenOptions={NAV_HEADER_OPTION}>
        <AppStack.Screen name="TabNavigator" component={TabNavigator} />
        <AppStack.Screen name="Notifications" component={Notifications} />
        <AppStack.Screen name="OpenDoor" component={OpenDoor} />
      </AppStack.Navigator>
    </NotificationService>
  )
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '75%',
  },
  tabBar: {
    backgroundColor: WHITE,
    borderTopColor: TRANSPARENT,
    elevation: 0,
  },
  tabFocused: {
    color: YELLOW,
  },
  tabIcon: {
    height: RH(28),
  },
  tabLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XS,
  },
})

export default AppNavigator
