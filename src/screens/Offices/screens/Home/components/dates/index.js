import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Image, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'

import Date from './date'
import DatePickerModal from '@screens/Offices/screens/shared/datePickerModal'

import styles from './styles'

const pickerIcon = require('@assets/icons/ic_date_picker.png')

const Dates = ({ selectedDate, onSelectDate }) => {
  const { t } = useContext(I18nContext)
  const pickerModal = useRef(null)
  const [dates, setDates] = useState([])

  const loadDates = useCallback((prevDates) => {
    const _newDates = [...prevDates]
    for (let i = prevDates.length; i < prevDates.length + 7; i++) {
      _newDates.push(moment().add(i, 'days').format('YYYY-MM-DD'))
    }
    setDates(_newDates)
  }, [])

  useEffect(() => {
    loadDates([])
  }, [loadDates])

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        style={styles.listContainer}
        renderItem={({ item }) => (
          <Date date={item} t={t} selectedDate={selectedDate} onSelectDate={onSelectDate} />
        )}
        keyExtractor={(item) => item}
        onEndReached={() => loadDates(dates)}
      />
      <View style={styles.dateItemContainer}>
        <Ripple
          style={styles.pickerButton}
          rippleDuration={300}
          onPressIn={() => pickerModal.current?.open()}
        >
          <Image style={styles.icon} source={pickerIcon} />
        </Ripple>
      </View>
      <DatePickerModal ref={pickerModal} value={selectedDate} onSelectDate={onSelectDate} />
    </View>
  )
}

Dates.propTypes = {
  onSelectDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
}

Dates.defaultProps = {}

export default Dates
