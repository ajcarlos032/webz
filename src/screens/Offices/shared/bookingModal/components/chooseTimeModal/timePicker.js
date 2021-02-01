import React, { useContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'

import WheelScrollPicker from '@lib/WheelScrollPicker'

import { DARK_BLUE, DARK_SILVER, ERROR, PRIMARY_BLACK, GRAY, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_H5, DIM_V9 } from '@root/constants'

import {
  WHEEL_SCROLL_ITEM_HEIGHT,
  WHEEL_SCROLL_WRAPPER_HEIGHT,
  buildTimePickerData,
} from '@components/DatePicker/utils'
import { RW } from '@root/theme/utils'

const TimePicker = ({
  errorStart,
  errorEnd,
  startDate,
  startTime,
  endDate,
  endTime,
  setStartTime,
  setEndTime,
}) => {
  const { t } = useContext(I18nContext)
  const [times, setTimes] = useState([])

  const { endLabel, startLabel } = useMemo(() => {
    const getLabel = (date) => {
      let label = ''
      const today = moment().format('YYYY-MM-DD')
      const diff = moment(date).diff(today, 'days')
      if (diff === 0) {
        label = t('home.today')
      } else if (diff === 1) {
        label = t('home.tomorrow')
      } else {
        const dayOfWeek = moment(date).format('dddd')
        label = t(`home.${dayOfWeek.toLowerCase()}`)
      }

      return label
    }
    return { endLabel: getLabel(endDate), startLabel: getLabel(startDate) }
  }, [endDate, startDate, t])

  useEffect(() => {
    setTimes(buildTimePickerData())
  }, [t])

  const renderItem = useMemo(
    () => (item, index, selected, error) => {
      let labelStyle = styles.label
      if (selected) {
        if (error) labelStyle = styles.unAvailableLabel
        else labelStyle = styles.selectedLabel
      }

      return (
        <View key={index} style={[styles.item, { height: WHEEL_SCROLL_ITEM_HEIGHT }]}>
          <Text style={labelStyle}>{item.label}</Text>
          {selected && error && <Text style={styles.errorLabel}>{t('home.notAvailable')}</Text>}
        </View>
      )
    },
    [t],
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home.chooseTime')}</Text>
      <View style={[styles.row, { height: WHEEL_SCROLL_ITEM_HEIGHT }]}>
        <View style={styles.dateLabelContainer}>
          <Text style={styles.dateLabel}>{moment(startDate).format('YYYY.MM.DD')}</Text>
          <Text style={styles.timeLabel}>{startLabel}</Text>
        </View>
        <View style={styles.hyphen}>
          <Text style={styles.dateLabel}>-</Text>
        </View>
        <View style={styles.dateLabelContainer}>
          <Text style={styles.dateLabel}>{moment(endDate).format('YYYY.MM.DD')}</Text>
          <Text style={styles.timeLabel}>{endLabel}</Text>
        </View>
      </View>
      <View style={[styles.row]}>
        <WheelScrollPicker
          data={times}
          itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
          wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
          value={startTime}
          renderItem={(item, index, selected) => renderItem(item, index, selected, errorStart)}
          onValueChange={setStartTime}
        />
        <View style={styles.hyphen} />
        <WheelScrollPicker
          data={times}
          itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
          wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
          value={endTime}
          renderItem={(item, index, selected) => renderItem(item, index, selected, errorEnd)}
          onValueChange={setEndTime}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
    width: '100%',
  },
  dateLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
  dateLabelContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  errorLabel: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  highlightView: {
    alignItems: 'center',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
    height: WHEEL_SCROLL_ITEM_HEIGHT,
    justifyContent: 'center',
    width: '100%',
  },
  hyphen: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: RW(25),
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
  selectedLabel: {
    color: YELLOW,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
  },
  timeLabel: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  title: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V9,
    textAlign: 'center',
  },
  unAvailableLabel: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
  },
})

TimePicker.propTypes = {
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  endTime: PropTypes.string.isRequired,
  errorEnd: PropTypes.bool.isRequired,
  errorStart: PropTypes.bool.isRequired,
  setEndTime: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  startTime: PropTypes.string.isRequired,
}

TimePicker.defaultProps = {
  endDate: moment().format('YYYY.MM.DD'),
  startDate: moment().format('YYYY.MM.DD'),
}

export default TimePicker
