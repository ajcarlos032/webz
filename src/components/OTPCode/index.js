/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import styles from './styles'

const OTPCode = ({ cellCount, value, setValue, isRTL }) => {
  const codeField = useBlurOnFulfill({ cellCount, value })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    setValue,
    value,
  })

  return (
    <View style={styles.container}>
      <CodeField
        ref={codeField}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={[styles.row, isRTL && styles.rtlRow]}
        renderCell={({ index, symbol, isFocused }) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.cellText} onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  )
}

OTPCode.propTypes = {
  cellCount: PropTypes.number,
  isRTL: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
}

OTPCode.defaultProps = {
  cellCount: 5,
  isRTL: false,
  value: '',
}

export default OTPCode
