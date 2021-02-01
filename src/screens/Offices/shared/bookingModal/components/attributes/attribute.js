import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Stepper from '@screens/Offices/screens/shared/stepper'

import sharedStyles from '../sharedStyles'

const Attribute = ({ label, attribute, quantity, onChange }) => {
  const { t } = useContext(I18nContext)
  const { id, unit_name: unitName, price } = attribute
  const [count, setCount] = useState(quantity)

  useEffect(() => {
    if (quantity !== count) {
      const _attribute = { ...attribute, quantity: count }
      onChange(_attribute)
    }
  }, [id, attribute, quantity, count, onChange])

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.labelContainer}>
        <Text style={sharedStyles.label}>{label}</Text>
        <Text style={sharedStyles.subLabel}>{`${price} ${t('common.credit')}/${unitName}`}</Text>
      </View>
      <Stepper value={quantity} onChange={setCount} />
    </View>
  )
}

Attribute.propTypes = {
  attribute: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    unit_name: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
}

Attribute.defaultProps = {}

export default Attribute
