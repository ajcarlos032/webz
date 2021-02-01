import React, { useContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import WheelScrollPicker from '@lib/WheelScrollPicker'

import { DARK_GRAY, GRAY, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
} from '@theme/fonts'
import { DIM_H5 } from '@root/constants'

import {
  WHEEL_SCROLL_ITEM_HEIGHT,
  WHEEL_SCROLL_WRAPPER_HEIGHT,
  buildTimePickerData,
} from '@components/DatePicker/utils'

import sharedStyles from '../styles'

const TimePicker = ({ startTime, endTime, setStartTime, setEndTime, timeDiff }) => {
  const { t } = useContext(I18nContext)
  const [times, setTimes] = useState([])

  useEffect(() => {
    setTimes(buildTimePickerData(t('home.anyTime')))
  }, [t])

  const renderItem = useMemo(
    () => (item, index, selected) => (
      <View key={index} style={[styles.item, { height: WHEEL_SCROLL_ITEM_HEIGHT }]}>
        <Text style={selected ? styles.selectedLabel : styles.label}>{item.label}</Text>
      </View>
    ),
    [],
  )

  const TimeDiff = useMemo(
    () => (
      <View style={styles.timeDiffContainer}>
        <View style={styles.highlightView}>
          <Text style={styles.timeDiff}>{timeDiff}</Text>
        </View>
      </View>
    ),
    [timeDiff],
  )

  return (
    <View style={styles.container}>
      <Text style={sharedStyles.title}>{t('home.time')}</Text>
      <View style={[styles.row, { height: WHEEL_SCROLL_ITEM_HEIGHT }]}>
        <Text style={styles.pickerTitle}>{t('home.start')}</Text>
        <Text style={styles.pickerTitle} />
        <Text style={styles.pickerTitle}>{t('home.end')}</Text>
      </View>
      <View style={[styles.row]}>
        <WheelScrollPicker
          data={times}
          itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
          wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
          value={startTime}
          renderItem={renderItem}
          onValueChange={setStartTime}
        />
        {TimeDiff}
        <WheelScrollPicker
          data={times}
          itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
          wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
          value={endTime}
          renderItem={renderItem}
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
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  pickerTitle: {
    color: DARK_GRAY,
    flex: 1,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    textAlign: 'center',
  },
  row: {
    alignItems: 'center',
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
  timeDiff: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  timeDiffContainer: {
    alignItems: 'center',
    flex: 1,
    height: WHEEL_SCROLL_WRAPPER_HEIGHT,
    justifyContent: 'center',
  },
})

TimePicker.propTypes = {
  endTime: PropTypes.string.isRequired,
  setEndTime: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  timeDiff: PropTypes.string,
}

TimePicker.defaultProps = {
  timeDiff: '',
}

export default TimePicker
