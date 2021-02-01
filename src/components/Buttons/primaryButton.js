import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const PrimaryButton = ({ onPress, disabled, text, wrapperStyle }) => {
  const _onPress = useCallback(() => {
    Keyboard.dismiss()
    onPress()
  }, [onPress])

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity
        onPress={_onPress}
        disabled={disabled}
        style={[styles.primaryButton, disabled ? styles.disabledButton : null]}
        activeOpacity={0.5}
      >
        <Text style={[styles.primaryButtonText, disabled ? styles.disabledText : null]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object,
}

PrimaryButton.defaultProps = {
  disabled: false,
  wrapperStyle: {},
}

export default PrimaryButton
