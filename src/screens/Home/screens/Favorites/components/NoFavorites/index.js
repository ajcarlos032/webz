import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const favoriteIcon = require('@assets/icons/ic_favorites.png')

const NoFavorites = ({ onManageOffices }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={favoriteIcon} style={styles.favoriteIcon} />
        <Text style={styles.message}>{t('home.noFavoritesMsg')}</Text>
      </View>
      <PrimaryButton
        wrapperStyle={styles.buttonContainer}
        onPress={onManageOffices}
        text={t('home.manageOffices')}
      />
    </View>
  )
}

NoFavorites.propTypes = {
  onManageOffices: PropTypes.func.isRequired,
}

NoFavorites.defaultProps = {}

export default NoFavorites
