import moment from 'moment'

const YEAR_MIN = 2000
const YEAR_MAX = 2100
const CURRENT_YEAR = new Date().getFullYear()
const CURRENT_MONTH = new Date().getMonth() + 1

export const WHEEL_SCROLL_ITEM_HEIGHT = 60
export const WHEEL_SCROLL_WRAPPER_HEIGHT = 3 * WHEEL_SCROLL_ITEM_HEIGHT
export const ANYTIME_VALUE = 'anytime'

export const buildDatePickerData = (start, end) => {
  const data = [{ label: '- -', value: '- -' }]
  for (let i = start; i <= end; i++) {
    const label = i < 10 ? `0${i}` : `${i}`
    data.push({ label, value: i })
  }
  data.push({ label: '- -', value: '- -' })

  return data
}

export const buildTimePickerData = (anyTime) => {
  const data = [
    { label: '-- : --', value: '-- : --' },
    { label: '09:00', value: '09:00' },
  ]
  if (anyTime) data.push({ label: anyTime, value: ANYTIME_VALUE })
  // 09:30 - 23:00
  for (let i = 9; i < 23; i++) {
    const val1 = i < 10 ? `0${i}:30` : `${i}:30`
    const val2 = i + 1 < 10 ? `0${i + 1}:00` : `${i + 1}:00`
    data.push({ label: val1, value: val1 })
    data.push({ label: val2, value: val2 })
  }

  data.push({ label: '23:30', value: '23:30' })

  for (let i = 0; i < 9; i++) {
    const val1 = `0${i}:00`
    const val2 = `0${i}:30`
    data.push({ label: val1, value: val1 })
    data.push({ label: val2, value: val2 })
  }
  data.push({ label: '-- : --', value: '-- : --' })

  return data
}

export const DATE_PICKER_DATA = {
  DAYS: buildDatePickerData(1, moment(`${CURRENT_YEAR}-${CURRENT_MONTH}`, 'YYYY-MM').daysInMonth()),
  MONTHS: buildDatePickerData(1, 12),
  YEARS: buildDatePickerData(YEAR_MIN, YEAR_MAX),
}

export const twoDigitsDate = (year, month, date) =>
  `${year}-${month < 10 ? 0 : ''}${month}-${date < 10 ? 0 : ''}${date}`

/**
 * convert time written in minutes into time string
 * @param {int} time // 570(mins)
 * @return {string} // 09:00
 */
export const minToTimeStr = (time) => {
  const _time = time
  const hours = Math.floor(_time / 60)
  const mins = _time % 60

  return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}`
}

/**
 * convert time string into minutes
 * @param {string} timeStr // 09:30
 * @return {int} // 60 * 9 + 30 = 570(mins)
 */
export const timeStrToMin = (timeStr) => {
  if (timeStr === ANYTIME_VALUE) return 0
  const timeStrArr = timeStr.split(':')
  const timeInMinutes = +timeStrArr[0] * 60 + +timeStrArr[1]

  return timeInMinutes
}

/**
 * make human-readable time string from minutes
 * @param {int} minutes // 90(mins)
 * @returns {string} // 1 hr 30 min
 */
export const minutesToHRTimeStr = (minutes) => {
  const sign = minutes < 0 ? '-' : ''

  const _minutes = Math.abs(minutes)
  const daysDiff = Math.floor(_minutes / 1440)
  const hoursDiff = Math.floor((_minutes % 1440) / 60)
  const minsDiff = _minutes % 60

  let timeStr = sign
  if (daysDiff) {
    timeStr = `${daysDiff} day${daysDiff > 1 ? 's' : ''}\n`
  }
  if (hoursDiff) {
    timeStr += `${hoursDiff} hr `
  }
  if (minsDiff) {
    timeStr += `${minsDiff < 10 ? '0' : ''}${minsDiff} min`
  } else {
    timeStr += `0 min`
  }

  return timeStr
}

/**
 * make human-readable time-diff string from two time written in minutes
 * @param {int} start // 540(mins)
 * @param {int} end // 630(mins)
 * @param {int} diff // 90(mins)
 * @returns {string} // 1 hr 30 min
 */
export const timeDiffToHRTimeStr = (start, end) => {
  let timeDifInMinutes = end - start

  // we should consider the case of `endTime` is smaller than `startTime`, which means the next day.
  timeDifInMinutes = (60 * 24 + timeDifInMinutes) % (60 * 24)

  const hoursDiff = Math.floor(timeDifInMinutes / 60)
  const minsDiff = timeDifInMinutes % 60

  return `${hoursDiff} hr ${minsDiff < 10 ? '0' : ''}${minsDiff} min`
}

/**
 * get human-readable time difference between two time written in string
 * @param {string} startTimeStr // 09:00
 * @param {string} endTimeStr // 10:30
 * @returns {string} // 1 hr 30 min
 */
export const getStrTimeDiffStr = (startTimeStr, endTimeStr) => {
  if (startTimeStr === ANYTIME_VALUE || endTimeStr === ANYTIME_VALUE) return ''

  const startTimeInMinutes = timeStrToMin(startTimeStr)

  const endTimeInMinutes = timeStrToMin(endTimeStr)

  return timeDiffToHRTimeStr(startTimeInMinutes, endTimeInMinutes)
}

/**
 * get difference time in minutes between two time written in string
 * @param {string} startTimeStr // 09:00
 * @param {string} endTimeStr // 10:00
 * @returns {int} // 60(mins)
 */
export const getTimeDiffMin = (startTimeStr, endTimeStr) => {
  if (startTimeStr === ANYTIME_VALUE) {
    if (endTimeStr === ANYTIME_VALUE) return 60 * 23 + 59
    return timeStrToMin(endTimeStr)
  }
  if (endTimeStr === ANYTIME_VALUE) return 60 * 23 + 59 - timeStrToMin(startTimeStr)

  const startTimeStrArr = startTimeStr.split(':')
  const startTimeInMinutes = +startTimeStrArr[0] * 60 + +startTimeStrArr[1]

  const endTimeStrArr = endTimeStr.split(':')
  const endTimeInMinutes = +endTimeStrArr[0] * 60 + +endTimeStrArr[1]

  let timeDifInMinutes = endTimeInMinutes - startTimeInMinutes
  // we should consider the case of `endTime` is smaller than `startTime`, which means the next day.
  timeDifInMinutes = (60 * 24 + timeDifInMinutes) % (60 * 24)

  return timeDifInMinutes
}
