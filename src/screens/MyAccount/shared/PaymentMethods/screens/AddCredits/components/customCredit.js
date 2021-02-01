import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import { customCreditStyles as styles } from './sharedStyles'

const CustomCredit = ({ credit, cost, onChange }) => {
  const { isRTL } = useSelector(configSelector)

  const _onChange = useCallback(
    (value) => {
      if (isNaN(value)) return
      onChange(value !== '' ? Number(value) : value)
    },
    [onChange],
  )

  console.log({ credit })
  const _credit = useMemo(() => credit || 0, [credit])

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          style={[styles.textInput, isRTL && styles.rtlInput]}
          value={`${credit}`}
          keyboardType="numeric"
          onChangeText={_onChange}
        />
        <View style={styles.divider} />
        <Text style={styles.cost} numberOfLines={1}>{`$ ${_credit * cost}`}</Text>
      </View>
    </View>
  )
}

CustomCredit.propTypes = {
  cost: PropTypes.number.isRequired,
  credit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
}

CustomCredit.defaultProps = {
  credit: '',
}

export default CustomCredit
