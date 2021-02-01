import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import { RH } from '@theme/utils'
import { DARK_BLUE, PRIMARY_BLACK, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SF_PRO_REGULAR, FONT_SIZE_MD, FONT_SIZE_3XL } from '@theme/fonts'
import { DIM_H5, DIM_V3, DIM_V7, DIM_V9 } from '@root/constants'

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
          <Text style={styles.message}>{t('auth.sentEmailSuccess')}</Text>
        </View>
        <View style={styles.footer}>
          <PrimaryButton text={t('common.close')} onPress={onClose} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: DIM_V3,
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    marginTop: DIM_V9,
    textAlign: 'center',
  },
  modal: {
    paddingVertical: RH(125),
  },
  modalContainer: {
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V7,
  },
  successIcon: {
    height: RH(85),
    resizeMode: 'contain',
    width: RH(85),
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    textAlign: 'center',
  },
})

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

SuccessModal.defaultProps = {}

export default SuccessModal
