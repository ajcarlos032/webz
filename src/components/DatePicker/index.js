import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import moment from 'moment'

import WheelScrollPicker from '@lib/WheelScrollPicker'
import {
  WHEEL_SCROLL_ITEM_HEIGHT,
  WHEEL_SCROLL_WRAPPER_HEIGHT,
  DATE_PICKER_DATA,
  buildDatePickerData,
  twoDigitsDate,
} from './utils'

import styles from './styles'

const DatePicker = ({ value, onDateChange }) => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [date, setDate] = useState('')

  const [days, setDays] = useState(DATE_PICKER_DATA.DAYS)

  useEffect(() => {
    console.log({ value: moment(value).format('YYYY') })

    setYear(+moment(value).format('YYYY'))
    setMonth(+moment(value).format('MM'))
    setDate(+moment(value).format('DD'))
  }, [value])

  useEffect(() => {
    if (isNaN(year) || isNaN(month)) return

    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth()
    setDays(buildDatePickerData(1, daysInMonth))
    const newMonthDate = Math.min(date || 1, daysInMonth)
    if (isNaN(newMonthDate) || newMonthDate === date) return

    setDate(newMonthDate)
  }, [date, month, year])

  useEffect(() => {
    if (isNaN(year) || isNaN(month) || isNaN(date)) return
    onDateChange(twoDigitsDate(year, month, date))
  }, [year, month, date, onDateChange])

  const renderItem = useMemo(
    () => (item, index, selected) => (
      <View key={index} style={[styles.item, { height: WHEEL_SCROLL_ITEM_HEIGHT }]}>
        <Text style={selected ? styles.selectedLabel : styles.label}>{item.label}</Text>
      </View>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <WheelScrollPicker
        data={DATE_PICKER_DATA.YEARS}
        itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
        wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
        value={year}
        renderItem={renderItem}
        onValueChange={setYear}
      />
      <WheelScrollPicker
        data={DATE_PICKER_DATA.MONTHS}
        itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
        wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
        value={month}
        renderItem={renderItem}
        onValueChange={setMonth}
      />
      <WheelScrollPicker
        data={days}
        itemHeight={WHEEL_SCROLL_ITEM_HEIGHT}
        wrapperHeight={WHEEL_SCROLL_WRAPPER_HEIGHT}
        value={date}
        renderItem={renderItem}
        onValueChange={setDate}
      />
    </View>
  )
}

DatePicker.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

DatePicker.defaultProps = {
  value: moment().format('YYYY-MM-DD'),
}

export default DatePicker
