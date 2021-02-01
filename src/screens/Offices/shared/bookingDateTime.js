import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import { UTCToLocalTime } from '@helpers/utils'

import { RW } from '@theme/utils'
import { BACKGROUND, DARK_BLUE, DARK_SILVER, ERROR } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  LINE_HEIGHT20,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_V1, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const arrowIcon = require('@assets/icons/ic_next.png')
const arrowRTLIcon = require('@assets/icons/ic_previous.png')

const BookingDateTime = ({
  errorStart,
  errorEnd,
  editable,
  onEdit,
  start,
  end,
  showLabel,
  containerStyle,
}) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  return (
    <View style={[styles.container, containerStyle]}>
      {showLabel && <Text style={styles.label}>{t('home.dateTime')}</Text>}
      <TouchableOpacity style={styles.row} activeOpacity={0.5} onPress={onEdit}>
        <View style={styles.dateContainer}>
          <View style={styles.dateTimeContainer}>
            <Text style={[styles.date, (errorStart || errorEnd) && styles.unAvailableLabel]}>
              {UTCToLocalTime(start, 'DD.MM.YYYY')}
            </Text>
            <Text style={[styles.time, (errorStart || errorEnd) && styles.unAvailableLabel]}>
              {UTCToLocalTime(start, 'HH:mm')}
            </Text>
            {errorStart && <Text style={styles.errorLabel}>{t('home.notAvailable')}</Text>}
          </View>
          <Text style={styles.date}> - </Text>
          <View style={styles.dateTimeContainer}>
            <Text style={[styles.date, (errorStart || errorEnd) && styles.unAvailableLabel]}>
              {UTCToLocalTime(end, 'DD.MM.YYYY')}
            </Text>
            <Text style={[styles.time, (errorStart || errorEnd) && styles.unAvailableLabel]}>
              {UTCToLocalTime(end, 'HH:mm')}
            </Text>
            {errorEnd && <Text style={styles.errorLabel}>{t('home.notAvailable')}</Text>}
          </View>
        </View>
        {editable && <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  date: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    marginVertical: DIM_V1,
  },
  dateContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dateTimeContainer: {
    flexDirection: 'column',
  },
  errorLabel: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  icon: {
    resizeMode: 'contain',
    width: RW(24),
  },
  label: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacing: {
    flex: 1,
  },
  time: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  unAvailableLabel: {
    color: DARK_SILVER,
  },
})

BookingDateTime.propTypes = {
  containerStyle: PropTypes.object,
  editable: PropTypes.bool,
  end: PropTypes.string.isRequired,
  errorEnd: PropTypes.bool,
  errorStart: PropTypes.bool,
  onEdit: PropTypes.func,
  showLabel: PropTypes.bool,
  start: PropTypes.string.isRequired,
}

BookingDateTime.defaultProps = {
  containerStyle: {},
  editable: false,
  errorEnd: false,
  errorStart: false,
  onEdit: undefined,
  showLabel: true,
}

export default BookingDateTime
