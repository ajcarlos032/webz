import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import * as AddCalendarEvent from 'react-native-add-calendar-event'
import moment from 'moment'

import { addCalendarStyles as styles } from './sharedStyles'

const calendarIcon = require('@assets/icons/ic_calendar.png')

const AddToCalendar = ({ label, buttonText, start, end }) => {
  const onAddToCalendar = useCallback(() => {
    const eventConfig = {
      endDate: moment(end).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      startDate: moment(start).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      title: 'Booking',
    }

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventInfo) => {
        console.log(JSON.stringify(eventInfo))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [start, end])

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Image source={calendarIcon} style={styles.calendarIcon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.calendarButton} onPress={onAddToCalendar}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

AddToCalendar.propTypes = {
  buttonText: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
}

AddToCalendar.defaultProps = {}

export default AddToCalendar
