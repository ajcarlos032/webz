import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import { successModalStyles as styles } from './sharedStyles'

const successIcon = require('@assets/icons/ic_success.png')

const SuccessModal = ({ onClose }) => {
  const { t } = useContext(I18nContext)

  return (
    <Modal isVisible animationIn="slideInUp" animationOut="slideInDown" modalStyle={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('common.success')}</Text>
        </View>
        <View style={styles.body}>
          <Image source={successIcon} style={styles.successIcon} />
          <Text style={styles.message}>{t('home.paySuccessMessage')}</Text>
        </View>
        <View style={styles.footer}>
          <PrimaryButton text={t('common.close')} onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

SuccessModal.defaultProps = {}

export default SuccessModal
