import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const CarNumber = ({ carNumber, canRemove, onSelect, onRemove }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.carNumberContainer}>
      <TouchableOpacity style={styles.carNumberField} onPress={() => onSelect(carNumber.id)}>
        <View style={styles.header}>
          <Text style={styles.carNumber}>{carNumber.number}</Text>
          <View style={[styles.mark, carNumber.default && styles.defaultNumber]} />
        </View>
        <Text style={styles.label}>{carNumber.label}</Text>
      </TouchableOpacity>
      {canRemove && (
        <View style={styles.footer}>
          <Text style={styles.default}>{carNumber.default && t('account.default')}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(carNumber.id)}>
            <Text style={styles.removeText}>{t('account.remove')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

CarNumber.propTypes = {
  canRemove: PropTypes.bool,
  carNumber: PropTypes.shape({
    default: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

CarNumber.defaultProps = {
  canRemove: false,
}

export default CarNumber
