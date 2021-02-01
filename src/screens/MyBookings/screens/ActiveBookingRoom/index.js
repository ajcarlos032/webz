/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Ripple from 'react-native-material-ripple'
import moment from 'moment'

import BookingActions from '@store/Booking/Actions'
import { bookingByIdSelector } from '@store/User/Select'
import { bookingSelector } from '@store/Booking/Select'
import { configSelector } from '@store/Config/Select'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'

import Wrapper from '@components/Wrapper'
import PrimaryButton from '@components/Buttons/primaryButton'
import PureButton from '@components/Buttons/pureButton'

import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import ImageSlider from '@components/ImageSlider'

import BookingTime from './components/bookingTime'
import RoomRating from '@screens/Offices/shared/roomRating'
import RoomName from '@screens/Offices/shared/roomName'
import RoomPrice from '@screens/Offices/shared/roomPrice'
import RoomFacilitiesBrief from '@screens/Offices/shared/roomFacilitiesBrief'
import BookingDate from '@screens/MyBookings/screens/shared/bookingDate'
import DoorKey from '@screens/Offices/shared/doorKey'
import RoomOverview from '@screens/Offices/shared/roomOverview'
import RoomLocation from '@screens/Offices/shared/roomLocation'
import RoomReviews from '@screens/Offices/shared/roomReviews'
// import ParkingInfo from '@screens/Offices/shared/parkingInfo'
import Logo from '@screens/MyAccount/shared/Logo'
import UploadLogo from '@screens/MyAccount/shared/UploadLogo'
import WifiCode from './components/wifiCode'
import RateModal from './components/rateModal'
import ExpiredModal from './components/expiredModal'
import FloatingMenu from './components/floatingMenu'
import CarNumberChoiceModal from './components/carNumbers'

import { UTCToLocalTime } from '@helpers/utils'

import { BOOKING_STATUS } from '@screens/MyBookings/shared/constants'

import { BACKGROUND, TRANSPARENT, WHITE } from '@theme/colors'
import { CHAT_BUTTON_DIM, IMAGE_HEIGHT, IMAGE_WIDTH, styles } from './styles'

const chatIcon = require('@assets/icons/ic_chat.png')

const ActiveBookingRoom = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const { changeTheme } = useContext(ThemeContext)
  const scrollOffset = useRef(new Animated.Value(0))
  const carNumberChoiceModal = useRef()

  const [showRateModal, setShowRateModal] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)

  const booking = useSelector(bookingByIdSelector(route?.params.id))

  const {
    fetchBookingLoading,
    createReviewLoading,
    continueBookingLoading,
    completeBookingLoading,
    cancelBookingLoading,
    bookingUseLogoLoading,
    checkRoomExtendableLoading,
  } = useSelector(bookingSelector)

  const {
    door_key,
    id: booking_id,
    logo,
    room = {},
    room_attributes = [],
    start_date: start,
    end_date: end,
    status,
  } = booking || {}

  const {
    average_rate: rating,
    facilities,
    id: roomId,
    images,
    wifi_ssid,
    wifi_pass,
    location,
    name,
    overview,
    price,
    rates_count: ratingCount,
    reviews,
    seats,
  } = room

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: false })
  }, [changeTheme, isFocused])

  useEffect(() => {
    dispatch(BookingActions.fetchBooking({ id: route?.params.id }))
  }, [route, dispatch])

  const onPressChat = useCallback(() => {
    console.log('Chatting...')
  }, [])

  const onViewLocation = useCallback(() => {
    navigation.navigate('RoomLocationN3d', { room })
  }, [room, navigation])

  const onLogoUploaded = useCallback(
    (_logo) => {
      dispatch(BookingActions.bookingUseLogo({ booking_id, logo_id: _logo.id }))
    },
    [booking_id, dispatch],
  )

  const onScroll = useCallback(({ nativeEvent: { contentOffset: { y } } }) => {
    scrollOffset.current.setValue(y)
  }, [])

  const onRate = useCallback(
    (payload) => {
      setShowRateModal(false)
      dispatch(
        BookingActions.createReview({ ...payload, ...{ booking_id, room_id: roomId } }, () => {
          navigation.goBack()
        }),
      )
    },
    [booking_id, roomId, dispatch, navigation],
  )

  const onCancelRating = useCallback(() => {
    setShowRateModal(false)
    navigation.goBack()
  }, [navigation])

  const onContinueBooking = useCallback(() => {
    // setShowExpiredModal(false)
    dispatch(
      BookingActions.checkRoomExtendable({ bookingId: booking_id, roomId }, () =>
        setShowExpiredModal(false),
      ),
    )
  }, [booking_id, roomId, dispatch])

  const onCompleteBooking = useCallback(() => {
    setShowExpiredModal(false)
    dispatch(
      BookingActions.completeBooking({ id: booking_id }, () => {
        setShowRateModal(true)
      }),
    )
  }, [booking_id, dispatch])

  const onCancelBooking = useCallback(() => {
    dispatch(
      BookingActions.cancelBooking({ id: booking_id }, (success) => {
        if (success) navigation.goBack()
      }),
    )
  }, [booking_id, navigation, dispatch])

  const onUnlock = useCallback(() => {
    navigation.navigate('OpenDoor', { roomId })
  }, [navigation, roomId])

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
        <NavHeader hasBack navRight={<NavAlerts />} />
        <Animated.View style={[styles.headerBackground, { opacity: headerOpacity }]} />
      </View>
    ),
    [headerOpacity],
  )
  const totalCost = useMemo(() => {
    const time = moment(end).diff(start, 'minutes')
    let cost = price * (time / 60)

    room_attributes.forEach((attribute) => {
      cost += attribute.price * attribute.pivot.quantity
    })

    return +cost.toFixed(2)
  }, [room_attributes, end, price, start])

  const loading = useMemo(
    () =>
      fetchBookingLoading ||
      createReviewLoading ||
      continueBookingLoading ||
      completeBookingLoading ||
      cancelBookingLoading ||
      bookingUseLogoLoading,
    [
      bookingUseLogoLoading,
      cancelBookingLoading,
      completeBookingLoading,
      continueBookingLoading,
      createReviewLoading,
      fetchBookingLoading,
    ],
  )

  if (!Boolean(booking)) return <Wrapper loading={fetchBookingLoading} />

  return (
    <Wrapper loading={loading}>
      {/* <Ripple
        style={[styles.chatButton, styles.dropShadow]}
        rippleContainerBorderRadius={CHAT_BUTTON_DIM / 2}
        rippleColor={WHITE}
        rippleOpacity={1}
        rippleDuration={300}
        onPressIn={onPressChat}
      >
        <Image style={styles.chatIcon} source={chatIcon} />
      </Ripple> */}
      <ParallaxScrollView
        backgroundColor={TRANSPARENT}
        contentBackgroundColor={BACKGROUND}
        contentContainerStyle={styles.scrollView}
        parallaxHeaderHeight={IMAGE_HEIGHT}
        renderForeground={() => renderParallexHeader}
        renderFixedHeader={() => renderStickyHeader}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        scrollEvent={onScroll}
      >
        <View style={styles.container}>
          <View style={styles.roomBasicInfoContainer}>
            <RoomRating rating={rating} ratingCount={ratingCount} />
            <RoomName name={name} />
            <RoomPrice price={`${price} ${t('common.credit')}/hr`} />
            <RoomFacilitiesBrief seats={seats} facilities={facilities} />
            <BookingDate start={start} end={end} />
          </View>
          <BookingTime
            start={UTCToLocalTime(start)}
            end={UTCToLocalTime(end)}
            onExpired={setShowExpiredModal}
            status={status}
          />
          <DoorKey isRTL={isRTL} label={t('home.doorKey')} doorKey={door_key} />
          <WifiCode
            label={t('bookings.wifiCode')}
            ssid={wifi_ssid}
            pass={wifi_pass}
            copyMessage={t('bookings.copySuccess')}
          />
          <Logo logo={logo} />
          <UploadLogo isRTL={isRTL} onUploaded={onLogoUploaded} />
          <RoomOverview overview={overview} />
          <RoomLocation
            title={t('home.location')}
            location={location}
            onViewLocation={onViewLocation}
          />
          {/* <ParkingInfo /> */}
          <RoomReviews reviews={reviews} />
        </View>
        <View style={styles.buttonsContainer}>
          {[BOOKING_STATUS.ACTIVE, BOOKING_STATUS.EXTENDED].includes(status) ||
          createReviewLoading ? (
            <View style={styles.buttonContainer}>
              <PrimaryButton
                text={t('bookings.completePay')}
                disabled={loading}
                onPress={onCompleteBooking}
              />
            </View>
          ) : (
            <>
              <View style={styles.buttonContainer}>
                <PureButton
                  disabled={loading}
                  text={t('common.cancel')}
                  onPress={onCancelBooking}
                />
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  disabled={loading}
                  text={t('bookings.extend')}
                  onPress={() => null}
                />
              </View>
            </>
          )}
        </View>
        {showRateModal && (
          <RateModal totalCost={totalCost} onSave={onRate} onClose={onCancelRating} />
        )}
        {!fetchBookingLoading && showExpiredModal && (
          <ExpiredModal
            endTime={UTCToLocalTime(end)}
            onContinue={onContinueBooking}
            onComplete={onCompleteBooking}
          />
        )}
      </ParallaxScrollView>
      <FloatingMenu
        isRTL={isRTL}
        onViewParking={() => carNumberChoiceModal.current?.open()}
        onUnlock={onUnlock}
      />
      <CarNumberChoiceModal ref={carNumberChoiceModal} />
    </Wrapper>
  )
}

ActiveBookingRoom.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

ActiveBookingRoom.defaultProps = {}

export default ActiveBookingRoom
