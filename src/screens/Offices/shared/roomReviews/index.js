import React, { useCallback, useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import ReviewItem from './reviewItem'
import ReviewModal from '@screens/Offices/shared/reviewModal'

import styles from './styles'

const RoomReviews = ({ reviews }) => {
  const { t } = useContext(I18nContext)
  const reviewModal = useRef(null)
  const [selected, setSelected] = useState(undefined)

  const onPressReview = useCallback(
    (_review) => {
      setSelected(_review)
      setTimeout(() => reviewModal.current?.open(), 50)
    },
    [reviewModal, setSelected],
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home.reviews')}</Text>
      <ScrollView
        contentContainerStyle={styles.reviews}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} onPressReview={onPressReview} />
        ))}
      </ScrollView>
      <ReviewModal ref={reviewModal} review={selected} />
    </View>
  )
}

RoomReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      member_name: PropTypes.string,
      rate: PropTypes.number,
    }),
  ),
}

RoomReviews.defaultProps = {
  reviews: [],
}

export default RoomReviews
