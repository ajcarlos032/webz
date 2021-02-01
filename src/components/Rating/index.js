import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { times } from 'lodash-es'

import Star from './star'

import styles from './styles'

const Rating = ({ rating, size, readOnly, isRTL, onRate, containerStyle, starStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {times(5, (index) => (
        <Star
          key={index}
          isRTL={isRTL}
          starValue={index + 1}
          rating={rating}
          size={size}
          readOnly={readOnly}
          onRate={onRate}
          starStyle={starStyle}
        />
      ))}
    </View>
  )
}

Rating.propTypes = {
  containerStyle: PropTypes.object,
  isRTL: PropTypes.bool,
  onRate: PropTypes.func,
  rating: PropTypes.number,
  readOnly: PropTypes.bool,
  size: PropTypes.number,
  starStyle: PropTypes.object,
}

Rating.defaultProps = {
  containerStyle: {},
  isRTL: false,
  onRate: () => null,
  rating: 0,
  readOnly: false,
  size: undefined,
  starStyle: {},
}

export default Rating
