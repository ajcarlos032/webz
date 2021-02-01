import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ellipsis from 'text-ellipsis'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import { reviewByIdSelector } from '@store/User/Select'

import Card from '@components/Card'
import User from '@screens/MyAccount/shared/User'
import Rating from '@components/Rating'

import styles from './styles'

const nextIcon = require('@assets/icons/ic_next.png')
const nextRTLIcon = require('@assets/icons/ic_previous.png')

const Review = ({ id, onPressReview }) => {
  const { isRTL } = useSelector(configSelector)
  const { description, member_avatar_url, member_name, rate, room_name } = useSelector(
    reviewByIdSelector(id),
  )

  return (
    <View style={styles.reviewItemContainer}>
      <Card>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.reviewItem}
          onPress={() => onPressReview(id)}
        >
          <View style={styles.reviewItemHeader}>
            <Text style={styles.roomName}>{room_name}</Text>
            <View style={styles.spacing} />
            <Image source={isRTL ? nextRTLIcon : nextIcon} style={styles.icon} />
          </View>
          <User avatar={member_avatar_url} name={member_name}>
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

Review.propTypes = {
  id: PropTypes.string.isRequired,
  onPressReview: PropTypes.func.isRequired,
}

Review.defaultProps = {}

export default Review
