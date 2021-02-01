import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

const Card = ({ children, cardStyle }) => {
  if (!children) return null
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.dropShadow, cardStyle]}>{children}</View>
    </View>
  )
}

Card.propTypes = {
  cardStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.any,
}

Card.defaultProps = {
  cardStyle: {},
  children: null,
}

export default Card
