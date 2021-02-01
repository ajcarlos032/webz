import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

import styles from './styles'

const Date = ({ date, selectedDate, onSelectDate, t }) => {
  const dateObj = useMemo(() => {
    const diff = moment(date).diff(moment().format('YYYY-MM-DD'), 'days')
    let label = ''
    if (diff === 0) {
      label = t('home.today')
    } else if (diff === 1) {
      label = t('home.tomorrow')
    } else if (moment(date).isSame(moment(), 'week')) {
      label = t(`home.${moment(date).format('ddd').toLowerCase()}`)
    } else if (moment(date).isSame(moment(), 'year')) {
      label = t(`home.${moment(date).format('MMM').toLowerCase()}`)
    } else {
      label = moment(date).format('YYYY/MM')
    }

    const value = moment(date).format('DD')

    return { date, label, value }
  }, [date, t])

  const isSelected = useMemo(() => selectedDate === `${dateObj.date}`, [selectedDate, dateObj])

  return (
    <View style={[styles.dateItemContainer, isSelected && styles.dateSelectedContainer]}>
      <TouchableOpacity style={styles.dateItem} onPress={() => onSelectDate(dateObj.date)}>
        <Text style={[styles.dateLabel, isSelected && styles.dateSelected]}>{dateObj.label}</Text>
        <Text style={[styles.dateValue, isSelected && styles.dateSelected]}>{dateObj.value}</Text>
      </TouchableOpacity>
    </View>
  )
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
  t: PropTypes.any.isRequired,
}

Date.defaultProps = {}

export default Date
