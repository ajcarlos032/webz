import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'

import UnlockButton from './unlockButton'

import styles from './sharedStyles'

const lockIcon = require('@assets/icons/ic_img_security.png')

const LobbyDoor = ({ roomId }) => {
  const onUnlock = useCallback(() => {
    console.log(`Unlocking room# ${roomId}`)
  }, [roomId])

  return (
    <View style={styles.lobbyDoorContainer}>
      <View style={styles.body}>
        <Image source={lockIcon} style={styles.lockIcon} />
      </View>
      <UnlockButton onUnlock={onUnlock} />
    </View>
  )
}

LobbyDoor.propTypes = {
  roomId: PropTypes.string.isRequired,
}

LobbyDoor.defaultProps = {}

export default LobbyDoor
