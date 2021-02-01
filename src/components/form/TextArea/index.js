import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { TextInput, TouchableWithoutFeedback, View } from 'react-native'

import FormError from '@components/FormError'

import { GRAY } from '@theme/colors'
import styles from './styles'

const TextArea = ({ value, placeholder, onChange, error, containerStyle, wrapperStyle, isRTL }) => {
  const input = useRef(null)

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback onPress={() => input.current?.focus()}>
        <View style={[styles.inputContainer, wrapperStyle, error && styles.errorContainer]}>
          <TextInput
            ref={input}
            value={value}
            onChangeText={onChange}
            style={[styles.textArea, error && styles.error, isRTL && styles.rtlInput]}
            placeholder={placeholder}
            placeholderTextColor={GRAY}
            multiline
            blurOnSubmit
          />
        </View>
      </TouchableWithoutFeedback>
      {!!error && <FormError error={error} />}
    </View>
  )
}

TextArea.propTypes = {
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  isRTL: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrapperStyle: PropTypes.object,
}

TextArea.defaultProps = {
  containerStyle: {},
  error: null,
  isRTL: false,
  placeholder: null,
  value: null,
  wrapperStyle: {},
}

export default TextArea
