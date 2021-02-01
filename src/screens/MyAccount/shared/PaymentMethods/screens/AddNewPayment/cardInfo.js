import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import styles from './styles'

const CARD_NO_PLACEHOLDER = '0000 0000 0000 0000'

const CardInfo = ({ number, holder, date }) => {
  const extraNumbers = useMemo(() => {
    if (!number) return CARD_NO_PLACEHOLDER
    let numbers = ''
    for (let i = 0; i <= CARD_NO_PLACEHOLDER.length; i++) {
      if (i > number.length) numbers += i % 5 === 0 ? ' ' : '0'
    }

    return numbers
  }, [number])
  return (
    <View style={styles.cardInfoContainer}>
      <Text style={styles.type}>MasterCard</Text>
      <Text style={styles.cardNumber}>
        {number}
        <Text style={styles.cardNumberPlaceholder}>{extraNumbers}</Text>
      </Text>
      <View style={styles.cardInfoFooter}>
        <Text style={styles.holderDate}>{holder || ' '}</Text>
        <Text style={styles.holderDate}>{date || ' '}</Text>
      </View>
    </View>
  )
}

CardInfo.propTypes = {
  date: PropTypes.string,
  holder: PropTypes.string,
  number: PropTypes.string,
}

CardInfo.defaultProps = {
  date: null,
  holder: null,
  number: null,
}

export default CardInfo
