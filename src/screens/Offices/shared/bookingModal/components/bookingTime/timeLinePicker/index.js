import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import BookingContext from '@screens/Offices/shared/bookingModal/bookingContext'

import Slider from './slider'

import { MIN_BOOKING_TIME, SLIDE_STEP, SLIDER_WIDTH } from '@screens/Offices/shared/utils/constants'
import {
  getTimeStrFromValue,
  getValueFromMinutes,
  getValueFromTimeStr,
} from '@screens/Offices/shared/utils'

import { SCREEN_WIDTH } from '@root/constants'

import { timeLinePicker as styles } from './sharedStyles'

const TimeLinePicker = () => {
  const { isRTL } = useSelector(configSelector)
  const timeLineView = useRef(null)
  const [scrollable, setScrollable] = useState(true)
  const [initialScrolled, setInitialScrolled] = useState(false)
  const { start, end, onChange } = useContext(BookingContext)

  const startValue = useMemo(() => getValueFromTimeStr(start), [start])
  const endValue = useMemo(() => getValueFromTimeStr(end), [end])

  const width = useMemo(() => endValue - startValue, [startValue, endValue])

  // auto scroll to place the `booking time` in the center
  useEffect(() => {
    if (initialScrolled) return

    const pivotValue = isRTL ? SLIDER_WIDTH - endValue : startValue

    const x = () => {
      if (width > SCREEN_WIDTH) return pivotValue - getValueFromMinutes(SLIDE_STEP)
      return Math.max(0, pivotValue - (SCREEN_WIDTH - width) / 2)
    }

    setTimeout(() => {
      timeLineView.current?.scrollTo({ x: x() })
      setInitialScrolled(true)
    }, 5)
  }, [initialScrolled, isRTL, timeLineView, startValue, endValue, width])

  const _onChange = useCallback(
    (values) => {
      setScrollable(true)
      const _start = getTimeStrFromValue(values[0])
      const _end = getTimeStrFromValue(values[1])
      onChange(_start, _end)
    },
    [onChange],
  )
  const minCursorOverlapDistance = useMemo(() => getValueFromMinutes(MIN_BOOKING_TIME), [])

  return (
    <View style={styles.container}>
      <ScrollView
        ref={timeLineView}
        horizontal
        scrollEnabled={scrollable}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <Slider
          values={[getValueFromTimeStr(start), getValueFromTimeStr(end)]}
          onValuesChangeFinish={_onChange}
          onValuesChangeStart={() => setScrollable(false)}
          minCursorOverlapDistance={minCursorOverlapDistance}
        />
      </ScrollView>
    </View>
  )
}

TimeLinePicker.propTypes = {}

TimeLinePicker.defaultProps = {}

export default TimeLinePicker
