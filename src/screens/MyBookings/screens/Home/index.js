/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import BookingActions from '@store/Booking/Actions'
import { bookingSelector } from '@store/Booking/Select'

import I18nContext from '@root/i18n/I18nContext'
import ThemeContext from '@root/ThemeContext'

import Wrapper from '@components/Wrapper'
import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import ActiveBookings from './components/bookings/activeBookings'
import CompletedBookings from './components/bookings/completedBookings'

import { TRANSPARENT } from '@theme/colors'

import styles from './styles'

const BOOKING_STATE = { ACTIVE: 0, COMPLETE: 1 }

const MyBookings = () => {
  const { t } = useContext(I18nContext)
  const { changeTheme, showTabBar } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const [bookingState, setBookingState] = useState(BOOKING_STATE.ACTIVE)

  const { fetchBookingsLoading } = useSelector(bookingSelector)

  useEffect(() => {
    changeTheme({
      showTabBar: isFocused || showTabBar,
    })
  }, [changeTheme, showTabBar, isFocused, dispatch])

  // fetch bookings
  useEffect(() => {
    if (!isFocused) return

    dispatch(BookingActions.fetchBookings())
  }, [isFocused, dispatch])

  const TAB_STATES = useMemo(
    () => [
      { key: 'ACTIVE', title: t('common.active') },
      { key: 'COMPLETE', title: t('common.complete') },
    ],
    [t],
  )

  const renderTabBar = useMemo(
    () => (props) => (
      <View style={styles.tabBarContainer}>
        <TabBar
          {...props}
          indicatorStyle={styles.tabIndicator}
          style={styles.tabBar}
          tabStyle={styles.tab}
          pressColor={TRANSPARENT}
          renderLabel={({ route, focused }) => (
            <Text style={[styles.tabLabel, focused && styles.tabFocusedLabel]}>{route.title}</Text>
          )}
          onTabPress={({ route }) => setBookingState(BOOKING_STATE[route.key])}
          onTabLongPress={({ route }) => setBookingState(BOOKING_STATE[route.key])}
        />
      </View>
    ),
    [],
  )

  return (
    <Wrapper loading={fetchBookingsLoading}>
      <NavHeader title={t('bookings.bookings')} navRight={<NavAlerts />} widthBottomBorder />
      <View style={styles.container}>
        <TabView
          navigationState={{ index: bookingState, routes: TAB_STATES }}
          renderTabBar={renderTabBar}
          renderScene={SceneMap({
            ACTIVE: ActiveBookings,
            COMPLETE: CompletedBookings,
          })}
          onIndexChange={() => null}
          sceneContainerStyle={styles.scenesContainer}
          swipeEnabled={false}
        />
      </View>
    </Wrapper>
  )
}

MyBookings.propTypes = {}

MyBookings.defaultProps = {}

export default MyBookings
