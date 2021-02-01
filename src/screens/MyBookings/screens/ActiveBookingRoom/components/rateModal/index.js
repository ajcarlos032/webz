import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import RatingForm from '@screens/MyBookings/shared/RatingForm'
import styles from './styles'

const RateModal = ({ totalCost, onSave, onClose }) => {
  const { t } = useContext(I18nContext)

  return (
    <Modal
      isVisible
      modalStyle={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onModalHide={onClose}
    >
      <View style={styles.container}>
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('bookings.bookingCompleted')}</Text>
            <Text style={styles.description}>{t('bookings.rateHelper')}</Text>
          </View>
          <View style={styles.totalCostContainer}>
            <Text style={styles.totalLabel}>{t('home.total')}</Text>
            <Text style={styles.totalCost}>{`${totalCost} ${t('home.credits')}`}</Text>
          </View>
          <RatingForm
            containerStyle={styles.ratingForm}
            buttonText={t('bookings.saveContinue')}
            onSave={onSave}
          />
        </View>
      </View>
    </Modal>
  )
}

RateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  totalCost: PropTypes.number,
}

RateModal.defaultProps = {
  totalCost: 0,
}

export default RateModal
