import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { findIndex } from 'lodash-es'

import { IS_IOS } from '@root/constants'

import styles from './styles'

let momentumStarted = false
let isScrollTo = false
let dragStarted = false
let timer = null

const WheelScrollPicker = ({
  data,
  value,
  wrapperHeight,
  itemHeight,
  renderItem,
  onValueChange,
}) => {
  const sView = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const index = findIndex(data, (datum) => datum.value === value)
      // place item at the middle of the ScrollView
      const y = (index - 1) * itemHeight
      sView.current?.scrollTo({ y })
      setSelectedIndex(index)
    }, 10)

    return () => clearTimeout(timeOut)
  }, [data, value, itemHeight])

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [])

  const scrollFix = useCallback(
    (e) => {
      let verticalY = 0
      if (e.nativeEvent.contentOffset) verticalY = e.nativeEvent.contentOffset.y + itemHeight // add the prev item height because we need to place selected item at the middle

      const _selectedIndex = Math.round(verticalY / itemHeight)

      const verticalElem = _selectedIndex * itemHeight
      if (verticalElem !== verticalY) {
        // using scrollTo in ios, onMomentumScrollEnd will be invoked
        if (IS_IOS) isScrollTo = true
      }
      if (selectedIndex !== _selectedIndex) {
        onValueChange(data[_selectedIndex].value)
      }
    },
    [data, itemHeight, onValueChange, selectedIndex],
  )

  const onMomentumScrollBegin = useCallback(() => {
    momentumStarted = true
    if (timer) clearTimeout(timer)
  }, [])

  const onMomentumScrollEnd = useCallback(
    (e) => {
      momentumStarted = false
      if (!isScrollTo && !momentumStarted && !dragStarted) scrollFix(e)
    },
    [scrollFix],
  )

  const onScrollBeginDrag = useCallback(() => {
    dragStarted = true
    if (IS_IOS) isScrollTo = false

    if (timer) clearTimeout(timer)
  }, [])

  const onScrollEndDrag = useCallback(
    (e) => {
      dragStarted = false
      // if not used, event will be garbaged
      const element = {
        nativeEvent: {
          contentOffset: {
            y: e.nativeEvent.contentOffset.y,
          },
        },
      }

      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        if (!momentumStarted && !dragStarted) scrollFix(element)
      }, 10)
    },
    [scrollFix],
  )

  if (!data.length) return null

  return (
    <View style={[styles.container, { height: wrapperHeight }]}>
      <View
        style={[
          styles.hightlightView,
          { height: itemHeight, top: (wrapperHeight - itemHeight) / 2 },
        ]}
      />
      <ScrollView
        ref={sView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      >
        {data.map((datum, index) => renderItem(datum, index, index === selectedIndex))}
      </ScrollView>
    </View>
  )
}

WheelScrollPicker.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  itemHeight: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperHeight: PropTypes.number,
}

WheelScrollPicker.defaultProps = {
  data: [],
  itemHeight: 60,
  wrapperHeight: 180,
}

export default WheelScrollPicker
