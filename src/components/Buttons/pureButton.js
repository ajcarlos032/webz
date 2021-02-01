import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const PureButton = ({ onPress, text, wrapperStyle }) => {
  const _onPress = useCallback(() => {
    Keyboard.dismiss()
    onPress()
  }, [onPress])

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity onPress={_onPress} style={styles.pureButton} activeOpacity={0.5}>
        <Text style={styles.pureButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

PureButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object,
}

PureButton.defaultProps = {
  wrapperStyle: {},
}

export default PureButton
