import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles, { CONTAINER_PADDING } from './styles'

import { SECONDARY } from '@theme/colors'
import { HORIZONTAL_DIM, SCREEN_WIDTH } from '@root/constants'

const PICKER_WIDTH = SCREEN_WIDTH - 2 * HORIZONTAL_DIM - 2 * CONTAINER_PADDING
const closeIcon = require('@assets/icons/ic_close.png')
const previousIcon = require('@assets/icons/ic_previous.png')
const nextIcon = require('@assets/icons/ic_next.png')

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DateRangeModal = ({ isRTL, start, end, onPick }) => {
  const { t } = useContext(I18nContext)

  const [startDate, setStartDate] = useState(start)
  const [endDate, setEndDate] = useState(end)

  useEffect(() => {
    return () => {
      setStartDate(null)
      setEndDate(null)
    }
  }, [])

  const onDateRangeChange = useCallback((date, type) => {
    if (type === 'START_DATE') setStartDate(date)
    if (type === 'END_DATE') setEndDate(date)
  }, [])

  const onChoose = useCallback(() => {
    onPick(startDate, endDate)
  }, [startDate, endDate, onPick])

  const onCancel = useCallback(() => {
    onPick(start, end)
  }, [start, end, onPick])

  const renderPrevious = useMemo(
    () => (
      <View style={styles.pickerButton}>
        <Image source={isRTL ? nextIcon : previousIcon} style={styles.icon} />
      </View>
    ),
    [isRTL],
  )

  const renderNext = useMemo(
    () => (
      <View style={styles.pickerButton}>
        <Image source={isRTL ? previousIcon : nextIcon} style={styles.icon} />
      </View>
    ),
    [isRTL],
  )

  return (
    <Modal isVisible>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
          <Image source={closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.pickerContainer}>
          <CalendarPicker
            allowRangeSelection
            allowBackwardRangeSelect
            showDayStragglers
            minRangeDuration={1}
            months={MONTHS}
            previousComponent={renderPrevious}
            nextComponent={renderNext}
            selectedStartDate={start}
            selectedEndDate={end}
            dayLabelsWrapper={styles.weekDayWrapper}
            selectedDayStyle={styles.selectedDay}
            selectedRangeStartStyle={styles.selectedEdgeDay}
            selectedRangeEndStyle={styles.selectedEdgeDay}
            selectedRangeStyle={styles.selectedRange}
            width={PICKER_WIDTH}
            textStyle={styles.calendarText}
            todayBackgroundColor={SECONDARY}
            customDayHeaderStyles={() => ({ textStyle: styles.dayOfWeekText })}
            onDateChange={onDateRangeChange}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={t('account.choose')}
              onPress={onChoose}
              disabled={!startDate || !endDate}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

DateRangeModal.propTypes = {
  end: PropTypes.object.isRequired,
  isRTL: PropTypes.bool,
  onPick: PropTypes.func.isRequired,
  start: PropTypes.object.isRequired,
}

DateRangeModal.defaultProps = {
  isRTL: false,
}

export default DateRangeModal
