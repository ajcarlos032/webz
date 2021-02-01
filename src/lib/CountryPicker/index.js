import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { filter } from 'lodash-es'

import PickerModal from './pickerModal'
import { FLAGS } from './flags'
import { countries } from './countries.json'

import styles from './styles'

const CountryPicker = ({ uniqueKey, value, isRTL, onSelect }) => {
  const [showPicker, setShowPicker] = useState(false)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const _country = filter(countries, (c) => c[uniqueKey] === `${value}`)
    setCountry(_country[0])
  }, [uniqueKey, value, setCountry])

  const flag = useMemo(() => {
    if (!country) return null
    return FLAGS[country.iso2]
  }, [country])

  const onChoose = useCallback(
    (_country) => {
      setCountry(_country)
      setShowPicker(false)
      onSelect(_country[uniqueKey])
    },
    [uniqueKey, setCountry, setShowPicker, onSelect],
  )

  if (!country) return null
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.pickerButton, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}
        activeOpacity={0.5}
        onPress={() => setShowPicker(true)}
      >
        <Image source={flag} resizeMode="contain" style={styles.flag} />
        <Text style={styles.dialCode}>{country.dialCode}</Text>
      </TouchableOpacity>
      {showPicker && <PickerModal onSelect={onChoose} onCancel={() => setShowPicker(false)} />}
    </View>
  )
}

CountryPicker.propTypes = {
  isRTL: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  uniqueKey: PropTypes.string,
  value: PropTypes.string,
}

CountryPicker.defaultProps = {
  isRTL: false,
  uniqueKey: 'dialCode',
  value: '+972', // israel
}

export default CountryPicker
