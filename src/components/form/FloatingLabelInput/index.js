/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, TextInput, View } from 'react-native'

import FormError from '@components/FormError'

import { RH } from '@theme/utils'
import { DARK_SILVER, DARK_GRAY, ERROR } from '@theme/colors'
import { FONT_SIZE_MD, FONT_SIZE_SM } from '@theme/fonts'

import styles from './styles'

const FloatingLabelInput = ({ value, label, keyboard, disabled, onChange, isSecurity, error, isRTL }) => {
  const [isFocused, setIsFocused] = useState(false)
  const _animatedIsFocused = useRef(new Animated.Value(Boolean(value) ? 1 : 0))

  const onBlur = useCallback(() => setIsFocused(false), [])
  const onFocus = useCallback(() => setIsFocused(true), [])

  useEffect(() => {
    Animated.timing(_animatedIsFocused.current, {
      duration: 200,
      toValue: isFocused || Boolean(value) ? 1 : 0,
    }).start()
  }, [isFocused, value])

  const labelStyle = useMemo(
    () => ({
      color: _animatedIsFocused.current.interpolate({
        inputRange: [0, 1],
        outputRange: error ? [ERROR, ERROR] : [DARK_SILVER, DARK_GRAY],
      }),
      fontSize: _animatedIsFocused.current.interpolate({
        inputRange: [0, 1],
        outputRange: [FONT_SIZE_MD, FONT_SIZE_SM],
      }),
      top: _animatedIsFocused.current.interpolate({
        inputRange: [0, 1],
        outputRange: [RH(15), RH(5)],
      }),
    }),
    [_animatedIsFocused, error],
  )

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, error && styles.errorContainer]}>
        <Animated.Text style={[isFocused || value ? styles.labelActive : styles.label, labelStyle]}>{label}</Animated.Text>
        <TextInput
          style={[styles.inputField, error && styles.error, isSecurity && styles.securityField, isRTL && styles.rtlInput]}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChange}
          secureTextEntry={isSecurity}
          blurOnSubmit
          keyboardType={keyboard}
          editable={!disabled}
        />
      </View>
      {!!error && <FormError error={error} />}
    </View>
  )
}

FloatingLabelInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  isRTL: PropTypes.bool,
  isSecurity: PropTypes.bool,
  keyboard: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

FloatingLabelInput.defaultProps = {
  disabled: false,
  error: null,
  isRTL: false,
  isSecurity: false,
  keyboard: 'default',
  label: '',
  value: null,
}

export default FloatingLabelInput
