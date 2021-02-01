import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Card from '@components/Card'
import ImageUploader from '@components/ImageUploader'

import { imageWithCustomDefault } from '@helpers/imageHelper'

import styles from './styles'

const avatarPlaceholder = require('@assets/images/image_placeholder.png')

const UserAvatar = ({ avatarUrl, avatar, onLoad }) => {
  const { t } = useContext(I18nContext)

  const avatarUri = useMemo(() => avatar?.uri || avatarUrl, [avatar?.uri, avatarUrl])

  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <ImageUploader style={styles.uploadButton} onLoaded={onLoad}>
          <View style={styles.cardBody}>
            <View style={styles.avatarContainer}>
              <Image
                source={imageWithCustomDefault(avatarUri, avatarPlaceholder)}
                style={avatarUri ? styles.avatar : styles.avatarPlaceholder}
              />
            </View>
            <Text style={styles.label}>{t('account.useAvatar')}</Text>
          </View>
        </ImageUploader>
      </Card>
    </View>
  )
}

UserAvatar.propTypes = {
  avatar: PropTypes.object,
  avatarUrl: PropTypes.string,
  onLoad: PropTypes.func.isRequired,
}

UserAvatar.defaultProps = {
  avatar: null,
  avatarUrl: null,
}

export default UserAvatar
