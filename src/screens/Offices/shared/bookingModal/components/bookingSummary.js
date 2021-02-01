import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { RH } from '@theme/utils'
import { DARK_BLUE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SF_PRO_SEMIBOLD, FONT_SIZE, LINE_HEIGHT22 } from '@theme/fonts'
import { HORIZONTAL_DIM } from '@root/constants'

const BookingSummary = ({ time, priceHr, bookingAttributes }) => {
  const { t } = useContext(I18nContext)
  const attributeSummary = useCallback(
    ({ id, name, price, quantity, unit_name: unitName }) => (
      <View key={id} style={styles.row}>
        <Text style={styles.summaryLabel}>{`${name} (${quantity}${unitName})`}</Text>
        <Text style={styles.summaryValue}>
          {`${+(price * quantity).toFixed(2)} ${t('common.credit')}`}
        </Text>
      </View>
    ),
    [t],
  )

  return (
    <View style={styles.container}>
      {!!time && (
        <View style={styles.row}>
          <Text style={styles.summaryLabel}>{t('home.hours')}</Text>
          <Text style={styles.summaryLabel}>{` (${time}) `}</Text>
          <View style={styles.spacing} />
          <Text style={styles.summaryValue}>{`${priceHr} ${t('common.credit')}`}</Text>
        </View>
      )}
      {bookingAttributes.map(attributeSummary)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: RH(20),
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  spacing: {
    flex: 1,
  },
  summaryLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
  },
  summaryValue: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
  },
})

BookingSummary.propTypes = {
  bookingAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  priceHr: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
}

BookingSummary.defaultProps = {
  bookingAttributes: [],
}

export default BookingSummary
