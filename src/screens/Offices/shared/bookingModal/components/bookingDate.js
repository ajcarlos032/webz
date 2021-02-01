import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import { RW } from '@theme/utils'
import { DARK_SILVER, ERROR, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import { FONT_SIZE, FONT_SIZE_LG, FONT_SIZE_SM, FONT_SF_PRO_REGULAR } from '@theme/fonts'
import { DIM_H3, DIM_V4, DIM_V5, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

import sharedStyles from './sharedStyles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')
const dateTimeIcon = require('@assets/icons/ic_datetime.png')

const BookingDate = ({
  errorStart,
  errorEnd,
  onChangeDateTime,
  end_date,
  end_time,
  start_date,
  start_time,
}) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={onChangeDateTime}
      >
        <View style={styles.dateContainer}>
          <View style={styles.dateLabelContainer}>
            <Image source={dateTimeIcon} style={styles.dateTimeIcon} />
            <Text style={[sharedStyles.label, styles.label]}>{t('home.dateTime')}</Text>
          </View>
          <View style={styles.dateValueContainer}>
            <View style={styles.dateTimeContainer}>
              <Text style={[styles.date, (errorStart || errorEnd) && styles.unAvailableLabel]}>
                {start_date}
              </Text>
              <Text style={[styles.time, (errorStart || errorEnd) && styles.unAvailableLabel]}>
                {start_time}
              </Text>
              {errorStart && <Text style={styles.errorLabel}>{t('home.notAvailable')}</Text>}
            </View>
            <Text style={styles.date}>{' - '}</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={[styles.date, (errorStart || errorEnd) && styles.unAvailableLabel]}>
                {end_date}
              </Text>
              <Text style={[styles.time, (errorStart || errorEnd) && styles.unAvailableLabel]}>
                {end_time}
              </Text>
              {errorEnd && <Text style={styles.errorLabel}>{t('home.notAvailable')}</Text>}
            </View>
          </View>
        </View>
        <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.pickerIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: SECONDARY,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  dataSetContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 1,
  },
  date: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_LG,
  },
  dateContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
  },
  dateLabelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dateTimeContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  dateTimeIcon: {
    height: RW(22),
    resizeMode: 'contain',
    width: RW(22),
  },
  dateValueContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: DIM_V5,
  },
  errorLabel: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  label: {
    paddingHorizontal: DIM_H3,
  },
  pickerIcon: {
    height: RW(14),
    marginVertical: DIM_V4,
    width: RW(8),
  },
  time: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
  },
  unAvailableLabel: {
    color: DARK_SILVER,
  },
})

BookingDate.propTypes = {
  end_date: PropTypes.string.isRequired,
  end_time: PropTypes.string.isRequired,
  errorEnd: PropTypes.bool,
  errorStart: PropTypes.bool,
  onChangeDateTime: PropTypes.func.isRequired,
  start_date: PropTypes.string.isRequired,
  start_time: PropTypes.string.isRequired,
}

BookingDate.defaultProps = {
  errorEnd: false,
  errorStart: false,
}

export default BookingDate
