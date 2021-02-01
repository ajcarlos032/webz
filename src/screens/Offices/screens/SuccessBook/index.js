import React, { useCallback, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { CommonActions, useIsFocused } from '@react-navigation/native'

import { bookingByIdSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import NavHeader from '@navigation/components/NavHeader'

import Wrapper from '@components/Wrapper'
import PrimaryButton from '@components/Buttons/primaryButton'
import SecondaryButton from '@components/Buttons/secondaryButton'

import Manager from '@screens/Offices/screens/shared/manager'
import DoorKey from '@screens/Offices/shared/doorKey'
import BookingDateTime from '@screens/Offices/shared/bookingDateTime'
import ShareBooking from './components/shareBooking'
// import ParkingInfo from '@screens/Offices/shared/parkingInfo'
import AddToCalendar from './components/addToCalendar'

import { SERVER_ENDPOINT } from '@root/constants'

import styles from './styles'

const successMark = require('@assets/icons/ic_success.png')

const SuccessBook = ({ navigation, route }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const isFocused = useIsFocused()
  const booking = useSelector(bookingByIdSelector(route.params?.id))

  // Reset HomeStack to Initial screen
  useEffect(() => {
    if (!isFocused) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Rooms' }],
      })
      navigation.dispatch(resetAction)
    }
  }, [isFocused, navigation])

  const navigateTo = useCallback(
    (screen) => {
      navigation.navigate(screen)
    },
    [navigation],
  )

  if (!booking) return null

  const { door_key, id, start_date: start, end_date: end } = booking

  return (
    <Wrapper>
      <NavHeader title={t('home.successBook')} widthBottomBorder />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.messageContainer}>
          <Image source={successMark} style={styles.successMark} />
          <Text style={styles.successMessage}>{t('home.successBookMessage')}</Text>
        </View>
        <Manager />
        <DoorKey isRTL={isRTL} label={t('home.doorKey')} doorKey={door_key} />
        <BookingDateTime start={start} end={end} containerStyle={styles.bookingTimeContainer} />
        {/* <ParkingInfo /> */}
        <ShareBooking
          isRTL={isRTL}
          shareTitle={t('home.shareTitle')}
          shareMessage={t('home.shareMessage')}
          help={t('home.shareBookingHelp')}
          label={t('home.shareBooking')}
          url={`${SERVER_ENDPOINT}/book/${id}`}
        />
        <AddToCalendar
          label={t('home.bookDateInfo')}
          buttonText={t('home.addToCalendar')}
          start={start}
          end={end}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('home.myBooks')} onPress={() => navigateTo('MyBookings')} />
          <SecondaryButton text={t('home.bookAnother')} onPress={() => navigateTo('Rooms')} />
        </View>
      </ScrollView>
    </Wrapper>
  )
}

SuccessBook.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

SuccessBook.defaultProps = {}

export default SuccessBook
