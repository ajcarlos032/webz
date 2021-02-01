import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const PaymentMethod = ({ paymentMethod, onChangeDefault, onRemove }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.paymentMethodContainer}>
      <View style={styles.paymentMethodField}>
        <Text style={styles.paymentMethod}>
          {`${paymentMethod.number} | ${paymentMethod.type}`}
        </Text>
        <TouchableOpacity
          style={styles.changeDefaultButton}
          onPress={() => onChangeDefault(paymentMethod.id)}
        >
          <View style={[styles.mark, paymentMethod.default && styles.defaultMethod]} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.default}>{paymentMethod.default && t('account.default')}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(paymentMethod.id)}>
          <Text style={styles.removeText}>{t('account.remove')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

PaymentMethod.propTypes = {
  onChangeDefault: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  paymentMethod: PropTypes.shape({
    default: PropTypes.bool,
    id: PropTypes.string,
    number: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
}

PaymentMethod.defaultProps = {}

export default PaymentMethod
