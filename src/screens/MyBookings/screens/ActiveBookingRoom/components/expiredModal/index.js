import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'
import moment from 'moment'
import { useSelector } from 'react-redux'

import I18nContext from '@root/i18n/I18nContext'
import { bookingSelector } from '@store/Booking/Select'

import Modal from '@components/Modal'

import PrimaryButton from '@components/Buttons/primaryButton'
import SecondaryButton from '@components/Buttons/secondaryButton'

import styles from './styles'

const timeIcon = require('@assets/icons/ic_time.png')

const ExpiredModal = ({ endTime, onContinue, onComplete }) => {
  const { t } = useContext(I18nContext)
  const [expiredTime, setExpiredTime] = useState('00:00')
  const { checkRoomExtendableLoading, checkRoomExtendableFailure } = useSelector(bookingSelector)

  useEffect(() => {
    const getTime = () => {
      const diff = Math.abs(moment().diff(endTime, 'minutes'))
      const hours = Math.floor(diff / 60)
      const minutes = diff % 60

      return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    }

    setExpiredTime(getTime())
    const timeInterval = setInterval(() => setExpiredTime(getTime()), 20000)

    return () => clearInterval(timeInterval)
  }, [endTime])

  return (
    <Modal isVisible>
      <View style={styles.container}>
        <Text style={styles.title}>{t('bookings.bookingExpired')}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{t('bookings.bookingExpiredDescription')}</Text>
          <View style={styles.timeContainer}>
            <Image source={timeIcon} style={styles.icon} />
            <Text style={styles.expiredTime}>{expiredTime}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          {checkRoomExtendableFailure && (
            <Text style={styles.extendError}>{t('bookings.extendError')}</Text>
          )}
          <PrimaryButton
            disabled={checkRoomExtendableLoading}
            text={
              checkRoomExtendableLoading
                ? t('bookings.checkExtendability')
                : t('bookings.continueToUse')
            }
            onPress={onContinue}
          />
          <SecondaryButton
            disabled={checkRoomExtendableLoading}
            text={t('bookings.complete')}
            onPress={onComplete}
          />
        </View>
      </View>
    </Modal>
  )
}

ExpiredModal.propTypes = {
  endTime: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}

ExpiredModal.defaultProps = {}

export default ExpiredModal
