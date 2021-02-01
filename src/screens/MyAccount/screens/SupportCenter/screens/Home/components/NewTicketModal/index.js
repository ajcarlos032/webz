import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import TextArea from '@components/form/TextArea'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const NewTicketModal = ({ onCreate, onClose }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const [text, setText] = useState(null)
  const [error, setError] = useState(null)

  const _onCreate = useCallback(() => {
    if (!text) {
      setError(t('account.emptyError'))
      return
    }
    onCreate(text)
  }, [t, text, onCreate])

  useEffect(() => {
    setError((e) => (text ? null : e))
  }, [text])

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
        <View style={styles.ticketContainer}>
          <Text style={styles.title}>{t('account.questionText')}</Text>
          <TextArea
            wrapperStyle={styles.textContainer}
            value={text}
            error={error}
            placeholder={t('account.writeHere')}
            onChange={setText}
            isRTL={isRTL}
          />
          <PrimaryButton
            text={t('common.create')}
            wrapperStyle={styles.button}
            onPress={_onCreate}
          />
        </View>
      </View>
    </Modal>
  )
}

NewTicketModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
}

NewTicketModal.defaultProps = {}

export default NewTicketModal
