import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import { paymentCardStyles as styles } from './sharedStyles'

const PaymentCard = ({ cardType, cardNumber, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardDetail}>{`${cardNumber} | ${cardType}`}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => onSelect(cardType)}>
        <View style={[styles.button, cardType === selected && styles.selected]} />
      </TouchableOpacity>
    </View>
  )
}

PaymentCard.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

PaymentCard.defaultProps = {}

export default PaymentCard
