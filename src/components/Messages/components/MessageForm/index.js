import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { GRAY } from '@theme/colors'
import styles from './styles'

const attachmentIcon = require('@assets/icons/ic_attachment.png')
const recordIcon = require('@assets/icons/ic_mic.png')

const MessageForm = ({ onSend, isRTL }) => {
  const { t } = useContext(I18nContext)

  const [message, setMessage] = useState(null)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.messageButton}>
        <Image source={attachmentIcon} style={styles.messageIcon} />
      </TouchableOpacity>
      <View style={styles.inputFieldContainer}>
        <TextInput
          style={[styles.inputField, isRTL && styles.rtlInput]}
          value={message}
          multiline
          placeholder={t('common.message')}
          placeholderTextColor={GRAY}
          onChangeText={setMessage}
          returnKeyType="send"
          onSubmitEditing={() => onSend(message)}
        />
      </View>
      <TouchableOpacity style={styles.messageButton}>
        <Image source={recordIcon} style={styles.messageIcon} />
      </TouchableOpacity>
    </View>
  )
}

MessageForm.propTypes = {
  isRTL: PropTypes.bool,
  onSend: PropTypes.func.isRequired,
}

MessageForm.defaultProps = {
  isRTL: false,
}

export default MessageForm
