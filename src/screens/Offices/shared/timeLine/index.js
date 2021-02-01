import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import { isFullTime, isHalfTime, getTimeLabel } from '@screens/Offices/shared/utils'
import {
  AVAILABLE_TIME_NUM,
  INITIAL_OFFSET,
  RULER_MARGIN,
  SLIDER_WIDTH,
} from '@screens/Offices/shared/utils/constants'

import { SUCCESS } from '@theme/colors'

import styles from './styles'

const TimeLine = ({ offsetX, width, activeColor, onTap = undefined }) => {
  const onTapTimeLine = useCallback(
    (index) => {
      if (typeof onTap === 'function') {
        const startPoint = offsetX
        const endPoint = offsetX + width

        const tapPosition = index * RULER_MARGIN + INITIAL_OFFSET

        const nearToEnd = Math.abs(tapPosition - startPoint) > Math.abs(endPoint - tapPosition)
        if (nearToEnd) onTap([null, tapPosition])
        else onTap([tapPosition, null])
      }
    },
    [offsetX, width, onTap],
  )

  // considering the time: e.g. 19:00 - 09:30
  const { width0, width1 } = useMemo(() => {
    let startWidth = 0 // the width which starts from x < 08:30
    let endWidth = width // the width starts from 08:30 and ends at 08:30(right side)

    const realWidth = offsetX + width
    if (realWidth > SLIDER_WIDTH) {
      startWidth = realWidth - SLIDER_WIDTH
      endWidth = SLIDER_WIDTH - offsetX
    }
    return { width0: startWidth, width1: endWidth }
  }, [width, offsetX])

  return (
    <View style={styles.container}>
      {Array.from(Array(AVAILABLE_TIME_NUM).keys()).map((index) => (
        <TouchableOpacity
          onPress={() => onTapTimeLine(index)}
          activeOpacity={1}
          key={index}
          style={[styles.timeStepper, { left: index * RULER_MARGIN }]}
        >
          <View
            style={[
              styles.basicTime,
              isFullTime(index) && styles.fullTime,
              isHalfTime(index) && styles.halfTime,
            ]}
          />

          {isFullTime(index) && <Text style={[styles.timeLabel]}>{getTimeLabel(index)}</Text>}
        </TouchableOpacity>
      ))}
      <View
        style={[styles.highlighted, { backgroundColor: activeColor, left: 0, width: width0 }]}
      />
      <View
        style={[styles.highlighted, { backgroundColor: activeColor, left: offsetX, width: width1 }]}
      />
    </View>
  )
}

TimeLine.propTypes = {
  activeColor: PropTypes.string,
  offsetX: PropTypes.number,
  onTap: PropTypes.func,
  width: PropTypes.number,
}

TimeLine.defaultProps = {
  activeColor: SUCCESS,
  offsetX: 0,
  onTap: undefined,
  width: 0,
}

export default TimeLine
