import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import BookingActions from '@store/Booking/Actions'
import { reviewByIdSelector } from '@store/User/Select'
import { bookingSelector } from '@store/Booking/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import RoomName from '@screens/Offices/shared/roomName'
import RoomThumbImages from '@screens/Offices/shared/roomThumbImages'
import BookingDateTime from '@screens/Offices/shared/bookingDateTime'
import RatingForm from '@screens/MyBookings/shared/RatingForm'

import styles from './styles'

const Review = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const { updateReviewLoading } = useSelector(bookingSelector)

  const {
    id,
    date_from,
    date_to,
    description,
    rate,
    room_name,
    room: { images },
  } = useSelector(reviewByIdSelector(route?.params?.id))

  const onRate = useCallback(
    (payload) => {
      dispatch(
        BookingActions.updateReview({ ...payload, ...{ id } }, () => {
          navigation.goBack()
        }),
      )
    },
    [id, dispatch, navigation],
  )

  return (
    <AccountScreenWrapper loading={updateReviewLoading} title={t('account.myReviews')}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <RoomName name={room_name} />
        <RoomThumbImages images={images} />
        <BookingDateTime start={date_from} end={date_to} containerStyle={styles.bookingTime} />
        <RatingForm
          rating={rate}
          review={description}
          buttonText={t('common.save')}
          onSave={onRate}
        />
      </ScrollView>
    </AccountScreenWrapper>
  )
}

Review.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

Review.defaultProps = {}

export default Review
