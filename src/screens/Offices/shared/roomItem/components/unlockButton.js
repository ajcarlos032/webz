import React from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity } from 'react-native'

import { styles } from '../sharedStyles'

const unlockIcon = require('@assets/icons/ic_door_unlock.png')

const UnlockButton = ({ onUnlock }) => (
  <TouchableOpacity onPress={onUnlock} style={styles.unlockButton}>
    <Image source={unlockIcon} style={styles.unlockIcon} />
  </TouchableOpacity>
)

UnlockButton.propTypes = {
  onUnlock: PropTypes.func,
}

UnlockButton.defaultProps = {
  onUnlock: () => null,
}

export default UnlockButton
