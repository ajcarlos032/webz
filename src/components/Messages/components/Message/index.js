import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import User from '@screens/MyAccount/shared/User'

import { UTCToLocalTime } from '@helpers/utils'

import { RW } from '@theme/utils'
import styles from './styles'

const doubleCheckIcon = require('@assets/icons/ic_double_check.png')

const Message = ({ message }) => {
  if (!message) return null

  const { created_at, is_member, text } = message

  return (
    <View style={[styles.container, is_member && styles.meContainer]}>
      {!message.is_member && <User avatar={null} avatarSize={RW(20)} noBorder />}
      <View style={[styles.messageContainer, is_member && styles.meMessageContainer]}>
        <Text style={[styles.userName, is_member && styles.meName]}>
          {is_member ? 'You' : 'Andrey'}
          <Text style={styles.role}>{is_member ? '' : '(support specialist)'}</Text>
        </Text>
        <Text style={[styles.message, is_member && styles.meMessage]}>{text}</Text>
        <View style={styles.messageInfo}>
          <Text style={[styles.messageTime, is_member && styles.meMessageTime]}>
            {UTCToLocalTime(created_at, 'hh:mm A')}
          </Text>
          <Image
            source={doubleCheckIcon}
            style={[styles.checkIcon, is_member && styles.meCheckIcon]}
          />
        </View>
      </View>
    </View>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    created_at: PropTypes.string,
    id: PropTypes.string,
    is_member: PropTypes.bool,
    seen: PropTypes.bool,
    text: PropTypes.string,
  }),
}

Message.defaultProps = {
  message: undefined,
}

export default Message
