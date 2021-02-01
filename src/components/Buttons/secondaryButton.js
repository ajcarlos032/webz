import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const SecondaryButton = ({ onPress, text, wrapperStyle }) => {
  const _onPress = useCallback(() => {
    Keyboard.dismiss()
    onPress()
  }, [onPress])

  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity onPress={_onPress} style={styles.secondaryButton} activeOpacity={0.5}>
        <Text style={styles.secondaryButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

SecondaryButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object,
}

SecondaryButton.defaultProps = {
  wrapperStyle: {},
}

export default SecondaryButton
