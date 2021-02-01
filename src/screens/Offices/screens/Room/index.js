/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions, useIsFocused } from '@react-navigation/native'
import { Animated, Image, View } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Ripple from 'react-native-material-ripple'

import OfficeActions from '@store/Office/Actions'
import { officeSelector, roomByIdSelector } from '@store/Office/Select'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'
import OfficeContext from '@screens/Offices/officeContext'

import Wrapper from '@components/Wrapper'
import PrimaryButton from '@components/Buttons/primaryButton'

import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import ImageSlider from '@components/ImageSlider'

import RoomRating from '@screens/Offices/shared/roomRating'
import RoomName from '@screens/Offices/shared/roomName'
import RoomPrice from '@screens/Offices/shared/roomPrice'
import RoomOverview from '@screens/Offices/shared/roomOverview'
import RoomLocation from '@screens/Offices/shared/roomLocation'
import RoomFacilities from './components/roomFacilities'
import RoomReviews from '@screens/Offices/shared/roomReviews'

import { ANYTIME_VALUE } from '@components/DatePicker/utils'
import { INITIAL_START_TIME, MIN_BOOKING_TIME } from '@screens/Offices/shared/utils/constants'
import { addTimeToTimeStr } from '@screens/Offices/screens/shared/utils'

import { BACKGROUND, TRANSPARENT } from '@theme/colors'

import { CHAT_BUTTON_DIM, IMAGE_HEIGHT, IMAGE_WIDTH, styles } from './styles'
import { SCREEN_HEIGHT } from '@root/constants'

const chatIcon = require('@assets/icons/ic_chat.png')

const Room = ({ navigation, route }) => {
  const scrollOffset = useRef(new Animated.Value(0))
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { changeTheme } = useContext(ThemeContext)

  const { startTime, endTime, updateBookingData, setShowBookingModal } = useContext(OfficeContext)

  // Favorite room also can open Room
  const { id, ref = 'Rooms' } = route?.params

  const room = useSelector(roomByIdSelector(id))
  const { fetchRoomLoading } = useSelector(officeSelector)

  const {
    average_rate: rating,
    facilities,
    images,
    location,
    name,
    overview,
    price,
    rates_count: ratingCount,
    reviews,
  } = room || {}

  useEffect(() => {
    if (isFocused) {
      changeTheme({ showTabBar: false })
    }
  }, [changeTheme, isFocused])

  useEffect(() => {
    dispatch(OfficeActions.fetchRoom({ id }))
  }, [id, dispatch])

  // set booking data
  useEffect(() => {
    if (isFocused) {
      const _bookingData = {
        attributes: [],
        end_time: endTime,
        onConfirm: () => {
          setShowBookingModal(false)
          navigation.navigate('ReviewBooking')
        },
        room,
        start_time: startTime,
      }
      updateBookingData(_bookingData)
    }
  }, [endTime, navigation, room, setShowBookingModal, startTime, updateBookingData, isFocused])

  const onBack = useCallback(() => {
    if (ref !== 'Rooms') {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Rooms' }],
      })
      navigation.dispatch(resetAction)
    } else {
      navigation.goBack()
    }
  }, [ref, navigation])

  const onPressChat = useCallback(() => {
    console.log('Chatting...')
  }, [])

  const onViewLocation = useCallback(() => {
    navigation.navigate('RoomLocationN3d', { room })
  }, [room, navigation])

  const renderParallexHeader = useMemo(
    () => (
      <View style={styles.stickyHeaderContainer}>
        <ImageSlider
          urls={(images || []).map(({ url }) => url)}
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          paginatorStyle={styles.paginatorStyle}
        />
      </View>
    ),
    [images],
  )

  const headerOpacity = useMemo(
    () =>
      scrollOffset.current.interpolate({
        inputRange: [50, 0.85 * IMAGE_HEIGHT],
        outputRange: [0, 1],
        useNativeDriver: true,
      }),
    [scrollOffset],
  )

  const renderStickyHeader = useMemo(
    () => (
      <View style={styles.fixedHeader}>
        <NavHeader hasBack navRight={<NavAlerts />} onBack={onBack} />
        <Animated.View style={[styles.headerBackground, { opacity: headerOpacity }]} />
      </View>
    ),
    [headerOpacity, onBack],
  )

  const onScroll = useCallback(({ nativeEvent: { contentOffset: { y } } }) => {
    scrollOffset.current.setValue(y)
  }, [])

  const onReviewBooking = useCallback(() => {
    if (startTime !== ANYTIME_VALUE && endTime !== ANYTIME_VALUE && startTime !== endTime) {
      navigation.navigate('ReviewBooking')
    } else {
      setShowBookingModal(true)
    }
  }, [startTime, endTime, navigation, setShowBookingModal])

  if (!Boolean(room)) return <Wrapper loading={fetchRoomLoading} />

  return (
    <Wrapper loading={fetchRoomLoading}>
      {/* <Ripple
        style={[styles.chatButton, styles.dropShadow]}
        rippleContainerBorderRadius={CHAT_BUTTON_DIM / 2}
        rippleDuration={300}
        onPressIn={onPressChat}
      >
        <Image style={styles.chatIcon} source={chatIcon} />
      </Ripple> */}
      <ParallaxScrollView
        backgroundColor={TRANSPARENT}
        fadeOutForeground={false}
        contentBackgroundColor={BACKGROUND}
        contentContainerStyle={styles.scrollView}
        parallaxHeaderHeight={IMAGE_HEIGHT}
        renderForeground={() => renderParallexHeader}
        renderFixedHeader={() => renderStickyHeader}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={20}
        scrollEvent={onScroll}
      >
        <View style={styles.container}>
          <View style={styles.roomBasicInfoContainer}>
            <RoomRating rating={rating} ratingCount={ratingCount} />
            <RoomName name={name} />
            <RoomPrice price={`${price} ${t('common.credit')}/hr`} />
          </View>
          <RoomOverview overview={overview} />
          <RoomFacilities title={t('home.facilities')} facilities={facilities} />
          <RoomLocation location={location} onViewLocation={onViewLocation} />
          <RoomReviews reviews={reviews} />
        </View>
      </ParallaxScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={`${t('home.book')} ${price} ${t('common.credit')}/${t('common.hr')}`}
          onPress={onReviewBooking}
        />
      </View>
    </Wrapper>
  )
}

Room.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

Room.defaultProps = {}

export default Room
