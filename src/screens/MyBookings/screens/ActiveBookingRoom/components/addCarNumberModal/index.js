import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import CardNumberForm from '@screens/MyAccount/shared/CarNumber/Form'

import styles from './styles'

const closeIcon = require('@assets/icons/ic_close.png')

const AddCarNumberModal = ({ onClose }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{t('account.carNumber')}</Text>
      <CardNumberForm
        awareKeyboard
        successModalDescription={t('account.carNumberAdded')}
        onCloseSuccessModal={onClose}
      />
    </View>
  )
}

AddCarNumberModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

AddCarNumberModal.defaultProps = {}

export default AddCarNumberModal
