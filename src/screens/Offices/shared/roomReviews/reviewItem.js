import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import ellipsis from 'text-ellipsis'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import Card from '@components/Card'
import User from '@screens/MyAccount/shared/User'
import Rating from '@components/Rating'

import styles from './styles'

const ReviewItem = ({ review, onPressReview }) => {
  const { member_avatar_url: userAvatar, member_name: userName, rate, description } = review

  const { isRTL } = useSelector(configSelector)

  return (
    <View style={styles.reviewItemContainer}>
      <Card cardStyle={styles.card}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.reviewItem}
          onPress={() => onPressReview(review)}
        >
          <User avatar={userAvatar} name={userName}>
            <Rating rating={rate} readOnly isRTL={isRTL} containerStyle={styles.rating} />
          </User>
          {!!description && (
            <View style={styles.reviewContainer}>
              <Text style={styles.review}>{ellipsis(description, 125)}</Text>
            </View>
          )}
        </TouchableOpacity>
      </Card>
    </View>
  )
}

ReviewItem.propTypes = {
  onPressReview: PropTypes.func.isRequired,
  review: PropTypes.shape({
    description: PropTypes.string,
    member_avatar_url: PropTypes.string,
    member_name: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
}

ReviewItem.defaultProps = {}

export default ReviewItem
