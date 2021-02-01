import React, { useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import OTPCode from '@components/OTPCode'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const closeIcon = require('@assets/icons/ic_close.png')

const CELL_COUNT = 5

const OTPModal = ({ phone, loading, onClose, onVerify }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const [code, setCode] = useState('')
  const [time, setTime] = useState(15)

  useEffect(() => {
    const countDown = setInterval(() => setTime((_t) => Math.max(0, _t - 1)), 1000)
    return () => clearInterval(countDown)
  }, [time])

  const timeOut = useMemo(() => `0:${Math.floor(time / 10)}${time % 10}`, [time])

  const canSubmit = useMemo(() => code && code.length === CELL_COUNT, [code])

  return (
    <Modal isVisible>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{t('auth.whatsTheCode')}</Text>
        </View>
        <View style={styles.codeContainer}>
          <OTPCode cellCount={CELL_COUNT} value={code} setValue={setCode} isRTL={isRTL} />
          <View style={styles.messageRow}>
            <Text style={styles.message}>{t('auth.enterTheCodeSentTo')}</Text>
            <Text style={styles.phoneNumber}>{phone}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>{t('auth.sendsSMSAfter')}</Text>
          <Text style={styles.time}>{timeOut}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={t('common.save')}
            onPress={() => onVerify({ code, first: false, phone })}
            disabled={!canSubmit || loading}
          />
        </View>
      </View>
    </Modal>
  )
}

OTPModal.propTypes = {
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onVerify: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
}

OTPModal.defaultProps = {
  loading: false,
}

export default OTPModal
