import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import Animated from 'react-native-reanimated'

import { RW } from '@theme/utils'
import { SCREEN_WIDTH } from '@root/constants'
import { BACKGROUND, SECONDARY, SUCCESS, TRANSPARENT } from '@theme/colors'

import styles from './styles'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Chart = ({
  progress,
  size,
  fillActiveColor,
  fillInActiveColor,
  strokeWidth,
  strokeActiveColor,
  strokeInActiveColor,
  children,
}) => {
  const innerStrokeWidth = useMemo(() => 0.6 * strokeWidth, [strokeWidth])
  const rOutter = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth])
  const rInner = useMemo(() => rOutter - (strokeWidth - innerStrokeWidth) / 2, [
    rOutter,
    strokeWidth,
    innerStrokeWidth,
  ])
  const rArc = useMemo(() => (rInner - innerStrokeWidth / 2) / 2, [rInner, innerStrokeWidth])
  const arcStrokeWidth = useMemo(() => 2 * rArc, [rArc])

  const cx_cy = useMemo(() => size / 2, [size])
  const circumferenceOutter = useMemo(() => rOutter * 2 * Math.PI, [rOutter])
  const circumferenceInner = useMemo(() => rInner * 2 * Math.PI, [rInner])
  const circumferenceArc = useMemo(() => rArc * 2 * Math.PI, [rArc])

  const α = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [2 * Math.PI, 0],
  })
  const strokeDashoffsetOutter = useMemo(() => Animated.multiply(α, rOutter), [rOutter, α])
  const strokeDashoffsetInner = useMemo(() => Animated.multiply(α, rInner), [rInner, α])
  const strokeDashoffsetArc = useMemo(() => Animated.multiply(α, rArc), [rArc, α])

  // Inactive progress circle
  const innerCircle = useMemo(
    () => (
      <Svg width={size} height={size}>
        <Circle
          stroke={strokeInActiveColor}
          fill="none"
          strokeWidth={innerStrokeWidth}
          cx={cx_cy}
          cy={cx_cy}
          r={rInner}
        />
        <AnimatedCircle
          stroke={BACKGROUND}
          fill="none"
          cx={cx_cy}
          cy={cx_cy}
          strokeDasharray={`${circumferenceInner}, ${circumferenceInner}`}
          strokeDashoffset={strokeDashoffsetInner}
          strokeWidth={0}
          r={rInner}
        />
      </Svg>
    ),
    [
      circumferenceInner,
      cx_cy,
      rInner,
      size,
      strokeInActiveColor,
      strokeDashoffsetInner,
      innerStrokeWidth,
    ],
  )

  // Active progress circle
  const outterCircle = useMemo(
    () => (
      <Svg width={size} height={size}>
        <Circle
          stroke={TRANSPARENT}
          fill="none"
          strokeWidth={strokeWidth}
          cx={cx_cy}
          cy={cx_cy}
          r={rOutter}
        />
        <AnimatedCircle
          stroke={strokeActiveColor}
          fill="none"
          cx={cx_cy}
          cy={cx_cy}
          strokeDasharray={`${circumferenceOutter}, ${circumferenceOutter}`}
          strokeDashoffset={strokeDashoffsetOutter}
          strokeWidth={strokeWidth}
          r={rOutter}
        />
      </Svg>
    ),
    [
      circumferenceOutter,
      cx_cy,
      rOutter,
      size,
      strokeActiveColor,
      strokeDashoffsetOutter,
      strokeWidth,
    ],
  )

  const arc = useMemo(
    () => (
      <Svg width={size} height={size}>
        <Circle
          stroke={fillInActiveColor}
          fill={fillInActiveColor}
          strokeWidth={arcStrokeWidth}
          cx={cx_cy}
          cy={cx_cy}
          r={rArc}
        />
        <AnimatedCircle
          stroke={fillActiveColor}
          fill="none"
          cx={cx_cy}
          cy={cx_cy}
          strokeDasharray={`${circumferenceArc}, ${circumferenceArc}`}
          strokeDashoffset={strokeDashoffsetArc}
          strokeWidth={arcStrokeWidth}
          r={rArc}
        />
      </Svg>
    ),
    [
      arcStrokeWidth,
      circumferenceArc,
      cx_cy,
      fillActiveColor,
      fillInActiveColor,
      rArc,
      size,
      strokeDashoffsetArc,
    ],
  )

  return (
    <View style={styles.container}>
      <View style={[styles.box, { height: size, width: size }]}>
        <View style={styles.outterCircle}>{outterCircle}</View>
        <View style={styles.innerCircle}>{innerCircle}</View>
        <View style={styles.arcContainer}>{arc}</View>
      </View>
      {children}
    </View>
  )
}

Chart.propTypes = {
  children: PropTypes.node,
  fillActiveColor: PropTypes.string,
  fillInActiveColor: PropTypes.string,
  progress: PropTypes.object,
  size: PropTypes.number,
  strokeActiveColor: PropTypes.string,
  strokeInActiveColor: PropTypes.string,
  strokeWidth: PropTypes.number,
}

Chart.defaultProps = {
  children: null,
  fillActiveColor: `${SUCCESS}20`,
  fillInActiveColor: SECONDARY,
  progress: new Animated.Value(0),
  size: 0.75 * SCREEN_WIDTH,
  strokeActiveColor: '#f7cd46',
  strokeInActiveColor: 'transparent',
  strokeWidth: RW(15),
}

export default Chart
