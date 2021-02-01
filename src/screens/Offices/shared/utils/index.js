import moment from 'moment'

import { timeStrToMin } from '@components/DatePicker/utils'
import { addTimeToTimeStr } from '@screens/Offices/screens/shared/utils'

import {
  AVAILABLE_TIME_NUM,
  INITIAL_OFFSET,
  RULER_MARGIN,
  SLIDE_STEP,
  TIMELINE_START_TIME,
  DISPLAY_TIME_GRAPH_UNIT,
  MIN_BOOKING_TIME,
} from './constants'

export const isHalfTime = (index) => {
  const value = index * SLIDE_STEP

  return value % (2 * DISPLAY_TIME_GRAPH_UNIT) === 0 // 08:30, 09:30 ...
}

export const isFullTime = (index) => {
  const value = index * SLIDE_STEP

  if (value % (2 * DISPLAY_TIME_GRAPH_UNIT) === 0) return false

  return value % DISPLAY_TIME_GRAPH_UNIT === 0 // 09:00, 10:00 ...
}

export const getTimeLabel = (index) => {
  const timeStrArr = addTimeToTimeStr(TIMELINE_START_TIME, SLIDE_STEP * index).split(':')
  const hrStr = +timeStrArr[0] % 24
  const minStr = timeStrArr[1]

  return `${hrStr < 10 ? '0' : ''}${hrStr}:${minStr}`
}

export const getSnapPoints = () => {
  const snapPoints = new Array(AVAILABLE_TIME_NUM).fill(0).map((_, i) => {
    if (i === 0) return INITIAL_OFFSET

    return INITIAL_OFFSET + i * RULER_MARGIN
  })

  return snapPoints
}

export const getValueFromMinutes = (minutes) => {
  const index = minutes / SLIDE_STEP

  return index * RULER_MARGIN
}

export const getValueFromTimeStr = (timeStr) => {
  const initialMinutes = timeStrToMin(TIMELINE_START_TIME)
  const checkValue = timeStrToMin(timeStr)
  const minutes =
    checkValue < initialMinutes ? 24 * 60 + timeStrToMin(timeStr) : timeStrToMin(timeStr)
  const index = (minutes - initialMinutes) / SLIDE_STEP

  return INITIAL_OFFSET + index * RULER_MARGIN
}

export const getTimeStrFromValue = (offsetX) => {
  if (offsetX === null) return null
  const index = (offsetX - INITIAL_OFFSET) / RULER_MARGIN

  const minutes = Math.round(index) * SLIDE_STEP

  return addTimeToTimeStr(TIMELINE_START_TIME, minutes)
}

export const snapPoint = (value, points) => {
  const diffPoint = (p) => Math.abs(p - value)

  const deltas = points.map(diffPoint)
  const minDelta = deltas.reduce((acc, arg) => Math.min(acc, arg))

  return points.reduce((acc, p) => (diffPoint(p) === minDelta ? p : acc), 0)
}

/**
 * Get snapped start & end time (+1hour)
 * @param {time string} selectedDate: e.g. 2020-12-26
 * @param {time string} availableDate: e.g. 2020-12-26 10:43:00
 * @return moment: e.g. 2020-12-26 10:43:00 -> [2020-12-26 11:30:00, 2020-12-26 12:00:00], 2020-12-26 11:54:00 -> [2020-12-26 12:30:00, 2020-12-26 13:00:00]
 */
export const snappedTimeRange = (selectedDate, availableDate) => {
  let date = moment(selectedDate)
  if (availableDate) date = date.isBefore(moment(availableDate)) ? moment(availableDate) : date

  const _date = moment(date).add(0, 'hour')
  const step = 30 // minutes
  const mins = moment(_date).format('mm')
  const minsToAdd = +mins < step ? step : 2 * step

  const start = moment(_date.format('YYYY-MM-DD HH:00:00')).add(minsToAdd, 'minutes')
  const end = moment(start).add(MIN_BOOKING_TIME, 'minutes')

  return {
    end: end.format('HH:mm'),
    start: start.format('HH:mm'),
    startDate: start.format('YYYY-MM-DD'),
  }
}
