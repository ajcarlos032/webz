import { UTCToLocalTime } from '@helpers/utils'

export const formatBookingDate = (start, end) => {
  const date = (dateTime) => dateTime.split(' ')[0]
  const time = (dateTime) => dateTime.split(' ')[1].slice(0, 5)

  const _start = UTCToLocalTime(start, 'DD.MM.YYYY HH:mm:ss')
  const _end = UTCToLocalTime(end, 'DD.MM.YYYY HH:mm:ss')

  const startDate = date(_start)
  const startTime = time(_start)

  const endDate = date(_end)
  const endTime = time(_end)

  if (startDate === endDate) return `${startDate} / ${startTime} - ${endTime}`

  return `${startDate} / ${startTime} - ${endDate} / ${endTime}`
}
