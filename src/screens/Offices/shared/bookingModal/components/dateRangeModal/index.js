import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { CalendarList, LocaleConfig } from 'react-native-calendars'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import ChooseTimeModal from '../chooseTimeModal'

import { ANYTIME_VALUE } from '@components/DatePicker/utils'
import { snappedTimeRange } from '@screens/Offices/shared/utils'

import { YELLOW } from '@theme/colors'

import styles, { getCalendarTheme } from './styles'

const closeIcon = require('@assets/icons/ic_close.png')

const BookingDateRange = ({ availableAt, date, startTime, endTime, onClose, onSelectDateTime }) => {
  const { t } = useContext(I18nContext)
  const [bDate, setBDate] = useState(date)
  const [_startTime, setStartTime] = useState(startTime)
  const [_endTime, setEndTime] = useState(endTime)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const { lang, isRTL } = useSelector(configSelector)

  useEffect(() => {
    if (!startTime || startTime === ANYTIME_VALUE || !endTime || endTime === ANYTIME_VALUE) {
      const { startDate, end, start } = snappedTimeRange(`${bDate} 00:00:00`, availableAt)
      setBDate(startDate)
      setStartTime(start)
      setEndTime(end)
    }
  }, [availableAt, bDate, endTime, startTime])

  useEffect(() => {
    const monthNames = [
      t('home.january'),
      t('home.february'),
      t('home.march'),
      t('home.april'),
      t('home.may'),
      t('home.june'),
      t('home.july'),
      t('home.august'),
      t('home.september'),
      t('home.october'),
      t('home.november'),
      t('home.december'),
    ]
    const monthNamesShort = [
      t('home.jan'),
      t('home.feb'),
      t('home.mar'),
      t('home.apr'),
      t('home.may'),
      t('home.jun'),
      t('home.jul'),
      t('home.aug'),
      t('home.sep'),
      t('home.oct'),
      t('home.nov'),
      t('home.dec'),
    ]
    const dayNames = [
      t('home.sunday'),
      t('home.monday'),
      t('home.tuesday'),
      t('home.wednesday'),
      t('home.thursday'),
      t('home.friday'),
      t('home.saturday'),
    ]
    const dayNamesShort = [
      t('home.sun'),
      t('home.mon'),
      t('home.tue'),
      t('home.wed'),
      t('home.thu'),
      t('home.fri'),
      t('home.sat'),
    ]
    LocaleConfig.locales[lang] = {
      dayNames,
      dayNamesShort,
      monthNames,
      monthNamesShort,
      today: t('home.today'),
    }
    LocaleConfig.defaultLocale = lang
  }, [t, lang])

  const _onSelectDateTime = useCallback(
    ({ eTime, sTime }) => {
      onSelectDateTime({ _date: bDate, eTime, sTime })
      setTimeout(() => {
        setShowTimePicker(false)
      }, 100)
    },
    [bDate, onSelectDateTime],
  )

  const renderDayOfWeek = useMemo(() => {
    const dayNamesShort = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    return (
      <View style={[styles.weekDayWrapper, isRTL && styles.rtlWrapper]}>
        {dayNamesShort.map((dayName) => (
          <Text key={dayName} style={styles.dayOfWeekText}>
            {t(`home.${dayName}`)}
          </Text>
        ))}
      </View>
    )
  }, [t, isRTL])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{t('home.selectDate')}</Text>
      <View style={styles.pickerContainer}>
        {renderDayOfWeek}
        <CalendarList
          calendarStyle={styles.calendar}
          current={date}
          minDate={moment(availableAt).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD')}
          monthFormat={isRTL ? 'yyyy MMMM' : 'MMMM yyyy'}
          onDayPress={({ dateString }) => setBDate(dateString)}
          onDayLongPress={({ dateString }) => setBDate(dateString)}
          pastScrollRange={50}
          calendarHeight={undefined}
          futureScrollRange={50}
          scrollEnabled
          hideExtraDays={false}
          theme={getCalendarTheme(isRTL)}
          markedDates={{ [bDate]: { marked: true, selected: true, selectedColor: YELLOW } }}
        />
      </View>
      <View style={styles.footer}>
        <PrimaryButton text={t('home.select')} onPress={() => setShowTimePicker(true)} />
      </View>
      {showTimePicker && (
        <ChooseTimeModal
          availableAt={availableAt}
          date={bDate}
          startTime={_startTime}
          endTime={_endTime}
          onSelect={_onSelectDateTime}
          onClose={() => setShowTimePicker(false)}
        />
      )}
    </View>
  )
}

BookingDateRange.propTypes = {
  availableAt: PropTypes.string,
  date: PropTypes.string,
  endTime: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSelectDateTime: PropTypes.func.isRequired,
  startTime: PropTypes.string,
}

BookingDateRange.defaultProps = {
  availableAt: moment().format('YYYY-MM-DD HH:mm:ss'),
  date: moment().format('YYYY-MM-DD'),
  endTime: '09:30',
  startTime: '09:00',
}

export default BookingDateRange
