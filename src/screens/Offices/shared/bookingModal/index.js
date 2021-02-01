import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, ScrollView, View } from 'react-native'
import { Portal } from 'react-native-portalize'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'
import OfficeContext from '@screens/Offices/officeContext'

import NavHeader from '@navigation/components/NavHeader'
import PrimaryButton from '@components/Buttons/primaryButton'
import RoomRating from '@screens/Offices/shared/roomRating'
import RoomName from '@screens/Offices/shared/roomName'
import RoomPrice from '@screens/Offices/shared/roomPrice'

import BookingDate from './components/bookingDate'
import Attributes from './components/attributes'
import BookingSummary from './components/bookingSummary'
import DateRangeModal from './components/dateRangeModal'

import { UTCToLocalTime } from '@helpers/utils'
import { ANYTIME_VALUE, getStrTimeDiffStr } from '@components/DatePicker/utils'
import { formatDateTimeFromStr, calcTotalCost } from '@screens/Offices/screens/shared/utils'

import { MIN_BOOKING_TIME } from '@screens/Offices/shared/utils/constants'
import { HEADER_HEIGHT, SCREEN_HEIGHT } from '@root/constants'

import styles from './styles'

const BookingModal = ({ onClose }) => {
  const { t } = useContext(I18nContext)
  const { bookingData, updateBookingData } = useContext(OfficeContext)
  const scrollOffset = useRef(new Animated.Value(0))

  const {
    attributes: selectedAttributes,
    date,
    end_time,
    onConfirm,
    start_time,
    room,
  } = bookingData

  const [bDate, setBDate] = useState(date)
  const [startTime, setStartTime] = useState(start_time)
  const [endTime, setEndTime] = useState(end_time)
  const [attributes, setAttributes] = useState(selectedAttributes)
  const [showDateRangePicker, setShowDateRangePicker] = useState(false)
  const offsetY = useRef(new Animated.Value(SCREEN_HEIGHT))

  const [errorStart, setErrorStart] = useState(false)
  const [errorEnd, setErrorEnd] = useState(false)

  const totalCost = useMemo(() => {
    return calcTotalCost(room?.price, startTime, endTime, attributes)
  }, [room?.price, startTime, endTime, attributes])

  const { start, end } = useMemo(
    () => formatDateTimeFromStr(bDate, startTime, endTime, 'YYYY-MM-DD'),
    [bDate, endTime, startTime],
  )

  const timeSelected = useMemo(
    () =>
      startTime &&
      startTime !== ANYTIME_VALUE &&
      endTime &&
      endTime !== ANYTIME_VALUE &&
      startTime !== endTime,
    [endTime, startTime],
  )

  const onScroll = useCallback(({ nativeEvent: { contentOffset: { y } } }) => {
    scrollOffset.current.setValue(y)
  }, [])

  const headerOpacity = useMemo(
    () =>
      scrollOffset.current.interpolate({
        inputRange: [0.25 * HEADER_HEIGHT, HEADER_HEIGHT],
        outputRange: [0, 1],
        useNativeDriver: true,
      }),
    [scrollOffset],
  )

  const renderStickyHeader = useMemo(
    () => (
      <View style={styles.fixedHeader}>
        <NavHeader hasBack onBack={onClose} />
        <Animated.View style={[styles.headerBackground, { opacity: headerOpacity }]} />
      </View>
    ),
    [headerOpacity, onClose],
  )

  const _onConfirm = useCallback(() => {
    if (!timeSelected || errorStart || errorEnd) {
      setShowDateRangePicker(true)
    } else {
      const _bookingData = {
        attributes,
        date: bDate,
        end_time: endTime,
        start_time: startTime,
      }
      updateBookingData(_bookingData)
      onConfirm()
    }
  }, [
    timeSelected,
    errorStart,
    errorEnd,
    attributes,
    bDate,
    endTime,
    startTime,
    updateBookingData,
    onConfirm,
  ])

  const onPickDateRange = useCallback(({ _date, sTime, eTime }) => {
    setBDate(_date)
    setStartTime(sTime)
    setEndTime(eTime)
    setShowDateRangePicker(false)
  }, [])

  useEffect(() => {
    Animated.timing(offsetY.current, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }, [])

  useEffect(() => {
    const availableAt = UTCToLocalTime(room?.available_at)
    const startDate = `${start} ${startTime}`
    const endDate = `${end} ${endTime}`

    const timeDiff = moment(endDate).diff(startDate, 'minutes')

    setErrorStart(moment(startDate).isBefore(moment(availableAt)))
    setErrorEnd(timeDiff < MIN_BOOKING_TIME)
  }, [end, endTime, end_time, room?.available_at, start, startTime, start_time])

  return (
    <Portal>
      <View style={styles.wrapper}>
        {renderStickyHeader}
        <Animated.View
          style={[styles.scrollContainer, { transform: [{ translateY: offsetY.current }] }]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
            scrollEventThrottle={20}
            onScroll={onScroll}
          >
            <View style={styles.spacing} />
            <View style={styles.container}>
              <View style={styles.row}>
                <RoomRating rating={room?.average_rate} ratingCount={room?.rates_count} />
                <RoomName name={room?.name} />
                <RoomPrice price={`${room?.price} ${t('common.credit')}/hr`} />
              </View>
              {timeSelected && (
                <BookingDate
                  errorStart={errorStart}
                  errorEnd={errorEnd}
                  end_date={end}
                  end_time={endTime}
                  start_date={start}
                  start_time={startTime}
                  onChangeDateTime={() => setShowDateRangePicker(true)}
                />
              )}
              <Attributes bookingAttributes={attributes} onChange={setAttributes} />
              <BookingSummary
                time={getStrTimeDiffStr(startTime, endTime)}
                priceHr={calcTotalCost(room?.price, startTime, endTime)}
                bookingAttributes={attributes}
              />
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={`${t('home.book')} ${totalCost ? `${totalCost} ${t('common.credit')}` : ''}`}
              onPress={_onConfirm}
            />
          </View>
          <View style={styles.stickyBottom} />
        </Animated.View>
        {showDateRangePicker && (
          <DateRangeModal
            availableAt={UTCToLocalTime(room?.available_at)}
            date={bDate.replace(/\./g, '-')}
            endTime={endTime}
            startTime={startTime}
            onSelectDateTime={onPickDateRange}
            onClose={() => setShowDateRangePicker(false)}
          />
        )}
      </View>
    </Portal>
  )
}

BookingModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

BookingModal.defaultProps = {}

export default BookingModal
