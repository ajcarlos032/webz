import React from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, View } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import FormError from '@components/FormError'

import { LIGHT_GRAY } from '@theme/colors'

import styles from './styles'

const InputField = ({ label, placeholder, value, pattern, error, pureText, onChange }) => {
  const { isRTL } = useSelector(configSelector)

  return (
    <View style={styles.inputFieldContainer}>
      <View style={[styles.inputFieldRow, error && styles.errorRow]}>
        <Text style={styles.label}>{label}</Text>
        {pureText ? (
          <TextInput
            numberOfLines={1}
            style={[styles.inputField, error ? styles.error : null, isRTL && styles.rtlInput]}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={LIGHT_GRAY}
            onChangeText={onChange}
          />
        ) : (
          <TextInputMask
            onChangeText={onChange}
            mask={pattern}
            multiline={false}
            placeholder={placeholder}
            placeholderTextColor={LIGHT_GRAY}
            value={value}
            style={[styles.inputField, error ? styles.error : null]}
          />
        )}
      </View>
      {!!error && <FormError error={error} />}
    </View>
  )
}

InputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  pureText: PropTypes.bool,
  value: PropTypes.string,
}

InputField.defaultProps = {
  error: null,
  pattern: '',
  pureText: false,
  value: null,
}

export default InputField
