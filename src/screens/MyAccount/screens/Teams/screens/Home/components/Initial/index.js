import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const backgroundImage = require('@assets/images/team_bg.png')

const Initial = ({ onCreateTeam }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={backgroundImage} style={styles.background} />
      </View>
      <Text style={styles.description}>{t('account.createFirstTeam')}</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text={t('common.create')} onPress={onCreateTeam} />
      </View>
    </View>
  )
}

Initial.propTypes = {
  onCreateTeam: PropTypes.func.isRequired,
}

Initial.defaultProps = {}

export default Initial
