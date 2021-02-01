import React, { useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, Animated } from 'react-native'

import styles from './styles'

const ANIMATION_SPEED = 300
const CIRCLE_HEIGHT = 18
const CIRCLE_WIDTH = 18
const PADDING = 12
const WIDTH = 46
const TRANSLATE_X = 26

const ToggleSwitch = ({
  circleColor,
  disabled,
  isOn,
  isRTL,
  label,
  labelStyle,
  offColor,
  onColor,
  onToggle,
  thumbOffStyle,
  thumbOnStyle,
  trackOffStyle,
  trackOnStyle,
  useNativeDriver,
}) => {
  const offsetX = useRef(new Animated.Value(0))

  const toggleSwitchStyle = useMemo(
    () => [
      {
        backgroundColor: isOn ? onColor : offColor,
        borderRadius: 20,
        justifyContent: 'center',
        padding: PADDING,
        width: WIDTH,
      },
      isOn ? trackOnStyle : trackOffStyle,
    ],
    [isOn, offColor, onColor, trackOffStyle, trackOnStyle],
  )

  const insideCircleStyle = useMemo(
    () => [
      {
        alignItems: 'center',
        backgroundColor: circleColor,
        borderRadius: CIRCLE_WIDTH / 2,
        elevation: 1.5,
        height: CIRCLE_HEIGHT,
        justifyContent: 'center',
        margin: 4,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        transform: [{ translateX: offsetX.current }],
        width: CIRCLE_WIDTH,
      },
      isRTL ? { right: 0 } : { left: 0 },
      isOn ? thumbOnStyle : thumbOffStyle,
    ],
    [circleColor, isOn, isRTL, thumbOffStyle, thumbOnStyle],
  )

  useEffect(() => {
    Animated.timing(offsetX.current, {
      duration: ANIMATION_SPEED,
      toValue: isOn ? WIDTH - TRANSLATE_X : 0,
      useNativeDriver,
    }).start()
  }, [isOn, useNativeDriver])

  return (
    <View style={styles.container}>
      {!!label && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        style={toggleSwitchStyle}
        activeOpacity={0.8}
        onPress={() => (disabled ? null : onToggle(!isOn))}
      >
        <Animated.View style={insideCircleStyle} />
      </TouchableOpacity>
    </View>
  )
}

ToggleSwitch.propTypes = {
  circleColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  isRTL: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  onToggle: PropTypes.func,
  thumbOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  thumbOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  trackOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  trackOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  useNativeDriver: PropTypes.bool,
}

ToggleSwitch.defaultProps = {
  circleColor: 'white',
  disabled: false,
  isOn: false,
  isRTL: false,
  label: null,
  labelStyle: {},
  offColor: '#ecf0f1',
  onColor: '#4cd137',
  onToggle: () => null,
  thumbOffStyle: {},
  thumbOnStyle: {},
  trackOffStyle: {},
  trackOnStyle: {},
  useNativeDriver: true,
}

export default ToggleSwitch
