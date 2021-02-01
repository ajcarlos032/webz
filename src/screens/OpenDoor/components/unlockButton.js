import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import styles from './sharedStyles'

const unlockIcon = require('@assets/icons/ic_door_unlock.png')

const UnlockButton = ({ onUnlock, disabled }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.unlockButton, disabled && styles.disabledButton]}
        onPress={onUnlock}
      >
        <Image source={unlockIcon} style={styles.unlockIcon} />
        <Text style={[styles.unlockButtonText, disabled && styles.disabledText]}>
          {t('home.unlock')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

UnlockButton.propTypes = {
  disabled: PropTypes.bool,
  onUnlock: PropTypes.func,
}

UnlockButton.defaultProps = {
  disabled: false,
  onUnlock: () => null,
}

export default UnlockButton
