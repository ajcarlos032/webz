/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useRef } from 'react'
import { View, Animated, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const ActionButtonItem = ({
  active,
  activeOpacity,
  angle,
  anim,
  buttonColor,
  offsetX,
  offsetY,
  radius,
  size,
  endDegree,
  startDegree,
  title,
  titleStyle,
  onPress,
  isRTL,
  children,
}) => {
  const titleAnim = useRef(new Animated.Value(0))

  useEffect(() => {
    const timeOut = setTimeout(() => {
      Animated.spring(titleAnim?.current, {
        duration: 50,
        toValue: active ? 1 : 0,
      }).start()
    }, 400)

    return () => clearTimeout(timeOut)
  }, [active])

  const containerStyle = useMemo(() => {
    const offset_X = radius * Math.cos(angle) + size
    const offset_Y = radius * Math.sin(angle)

    return {
      bottom: offsetY,
      flexDirection: 'row',
      height: size,
      justifyContent: 'flex-end',
      opacity: anim,
      overflow: 'visible',
      position: 'absolute',
      ...(isRTL ? { left: offsetX } : { right: offsetX }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, offset_Y],
          }),
        },
        {
          translateX: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, isRTL ? offset_X : offset_X],
          }),
        },
        {
          rotate: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [`${startDegree}deg`, `${endDegree}deg`],
          }),
        },
        {
          scale: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
      width: size,
      zIndex: 3,
    }
  }, [angle, anim, endDegree, isRTL, offsetX, offsetY, radius, size, startDegree])

  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity
        style={[styles.actionButtonItem, isRTL && styles.rtlRow]}
        activeOpacity={activeOpacity || 0.25}
        onPress={onPress}
      >
        {!!title && active && (
          <Animated.Text
            style={[
              titleStyle,
              {
                opacity: titleAnim?.current?.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}
          >
            {title}
          </Animated.Text>
        )}
        <View
          style={[
            styles.actionButton,
            {
              backgroundColor: buttonColor,
              borderRadius: size / 2,
              height: size,
              width: size,
            },
          ]}
        >
          {children}
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}

ActionButtonItem.propTypes = {
  angle: PropTypes.number,
  buttonColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  endDegree: PropTypes.number,
  onPress: PropTypes.func,
  radius: PropTypes.number,
  startDegree: PropTypes.number,
}

ActionButtonItem.defaultProps = {
  angle: 0,
  buttonColor: 'white',
  endDegree: 720,
  onPress: () => {},
  radius: 50,
  startDegree: 0,
}

export default ActionButtonItem
