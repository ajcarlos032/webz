import React, { useCallback, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { Animated, TouchableOpacity } from 'react-native'

import { RW } from '@theme/utils'
import styles from './styles'

const starEmptyIcon = require('@assets/icons/ic_star_empty.png')
const starFullIcon = require('@assets/icons/ic_star_full.png')
const starHalfIcon = require('@assets/icons/ic_star_half.png')
const starInvHalfIcon = require('@assets/icons/ic_star_inverse_half.png')

const RATING_STEP = 0.5

const Star = ({ isRTL, starValue, rating, size, readOnly, onRate, starStyle }) => {
  const springValue = useRef(new Animated.Value(1)).current

  const realRating = useMemo(() => Math.min((Math.round(rating) + Math.floor(rating)) / 2, 5), [
    rating,
  ])

  const starSpring = useCallback(() => {
    springValue.setValue(1.2)

    Animated.spring(springValue, {
      friction: 2,
      tension: 1,
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }, [springValue])

  const onRating = useCallback(() => {
    starSpring()

    let _rating = 0
    if (starValue === 1) {
      if ([0.5, 1].includes(realRating)) {
        _rating = realRating - RATING_STEP
      } else {
        _rating = 1
      }
    } else if (starValue - realRating === RATING_STEP || realRating - starValue >= RATING_STEP) {
      _rating = starValue
    } else {
      _rating = starValue - RATING_STEP
    }

    onRate(_rating)
  }, [starValue, realRating, starSpring, onRate])

  const star = useMemo(() => {
    if (starValue <= realRating) return starFullIcon
    if (realRating === starValue - RATING_STEP) return isRTL ? starInvHalfIcon : starHalfIcon

    return starEmptyIcon
  }, [isRTL, starValue, realRating])

  return (
    <TouchableOpacity activeOpacity={1} onPress={onRating} disabled={readOnly}>
      <Animated.Image
        source={star}
        style={[
          styles.star,
          {
            height: size,
            transform: [{ scale: springValue }],
            width: size,
          },
          starStyle,
        ]}
      />
    </TouchableOpacity>
  )
}

Star.propTypes = {
  isRTL: PropTypes.bool,
  onRate: PropTypes.func,
  rating: PropTypes.number,
  readOnly: PropTypes.bool,
  size: PropTypes.number,
  starStyle: PropTypes.object,
  starValue: PropTypes.number.isRequired,
}

Star.defaultProps = {
  isRTL: false,
  onRate: () => null,
  rating: 0,
  readOnly: false,
  size: RW(16),
  starStyle: {},
}

export default Star
