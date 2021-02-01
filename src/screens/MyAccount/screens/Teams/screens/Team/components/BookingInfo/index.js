import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import I18nContext from '@root/i18n/I18nContext'

import RoomName from '@screens/Offices/shared/roomName'
import BookingDateTime from '@screens/Offices/shared/bookingDateTime'
import RoomThumbImages from '@screens/Offices/shared/roomThumbImages'

import { BOOKING_STATUS } from '@screens/MyBookings/shared/constants'

import styles from './styles'

const BookingInfo = ({ booking }) => {
  const { t } = useContext(I18nContext)

  if (!booking) return null

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('account.info')}</Text>
        <Text
          style={[
            styles.bookingState,
            booking.status === BOOKING_STATUS.ACTIVE && styles.bookingActive,
            booking.status === BOOKING_STATUS.COMPLETED && styles.bookingCompleted,
          ]}
        >
          {booking.status === BOOKING_STATUS.ACTIVE
            ? t('bookings.pending')
            : booking.status === BOOKING_STATUS.COMPLETED
            ? t('bookings.completed')
            : t('bookings.pending')}
        </Text>
      </View>
      <View style={styles.body}>
        <RoomName name={booking.room.name} />
        <BookingDateTime
          start={booking.start_date}
          end={booking.end_date}
          showLabel={false}
          containerStyle={styles.dateTime}
        />
        <RoomThumbImages images={booking.room.images} />
      </View>
    </View>
  )
}

BookingInfo.propTypes = {
  booking: PropTypes.object,
}

BookingInfo.defaultProps = {
  booking: null,
}

export default BookingInfo
