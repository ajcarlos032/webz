import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import SecondaryButton from '@components/Buttons/secondaryButton'

import styles from './styles'

const arrowIcon = require('@assets/icons/emoji.png')

const NoResult = ({ t, onNavigate }) => {
  return (
    <View style={styles.container}>
      <Image source={arrowIcon} style={styles.emoji} />
      <Text style={styles.description}>{t('home.noSearchDesc')}</Text>
      <Text style={styles.helper}>{t('home.noSearchHelper')}</Text>
      <SecondaryButton text={t('home.allRooms')} onPress={onNavigate} />
    </View>
  )
}

NoResult.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

NoResult.defaultProps = {}

export default NoResult
