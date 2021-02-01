import moment from 'moment'

import {
  minToTimeStr,
  timeStrToMin,
  getTimeDiffMin,
  ANYTIME_VALUE,
} from '@components/DatePicker/utils'

export const addTimeToTimeStr = (timeStr, mins) => {
  const newTime = timeStrToMin(timeStr) + mins
  return minToTimeStr(newTime)
}

export const formatDateTimeFromStr = (
  date,
  startTimeStr,
  endTimeStr,
  format = 'YYYY-MM-DD HH:mm:ss',
) => {
  if (!date || !startTimeStr || !endTimeStr) return ''

  const TwoFourStr = (timeStr) => {
    const timeStrArr = timeStr.split(':')
    const hrStr = +timeStrArr[0] % 24
    const minStr = timeStrArr[1]

    return `${hrStr < 10 ? '0' : ''}${hrStr}:${minStr}`
  }

  const _startTimeStr = TwoFourStr(startTimeStr)
  const _endTimeStr = TwoFourStr(endTimeStr)

  const start = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(timeStrToMin(_startTimeStr), 'minutes')
    .format('YYYY-MM-DD HH:mm:ss')

  const offset = getTimeDiffMin(_startTimeStr, _endTimeStr)

  const end = moment(start).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss')

  return { end: moment(end).format(format), start: moment(start).format(format) }
}

export const calcTotalCost = (price = 0, startTime, endTime, attributes = []) => {
  let time = 0
  if (startTime && startTime !== ANYTIME_VALUE && endTime && endTime !== ANYTIME_VALUE) {
    time = getTimeDiffMin(startTime, endTime)
  }
  let cost = price * (time / 60)

  attributes.forEach((attribute) => {
    cost += attribute.price * attribute.quantity
  })

  return +cost.toFixed(2)
}
