import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import { userAvatar } from '@helpers/imageHelper'

import { RW } from '@theme/utils'

import styles from './styles'

const User = ({ avatar, name, avatarSize, containerStyle, noBorder, children }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.avatarContainer,
          !noBorder && styles.border,
          { height: avatarSize, width: avatarSize },
        ]}
      >
        <Image source={userAvatar(avatar)} style={styles.avatar} />
      </View>
      {(!!name || children) && (
        <View style={styles.detailContainer}>
          {!!name && <Text style={styles.name}>{name}</Text>}
          {children}
        </View>
      )}
    </View>
  )
}

User.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  avatarSize: PropTypes.number,
  children: PropTypes.any,
  containerStyle: PropTypes.object,
  name: PropTypes.string,
  noBorder: PropTypes.bool,
}

User.defaultProps = {
  avatar: null,
  avatarSize: RW(50),
  children: null,
  containerStyle: {},
  name: null,
  noBorder: false,
}

export default User
