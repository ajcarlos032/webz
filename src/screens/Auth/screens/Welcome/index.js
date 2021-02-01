import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Intro from './components/Intro'
import PrimaryButton from '@components/Buttons/primaryButton'
import SecondaryButton from '@components/Buttons/secondaryButton'

import styles from './styles'

const WelcomeScreen = ({ navigation }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Intro />
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('auth.signup')} onPress={() => navigation.navigate('Signup')} />
          <SecondaryButton text={t('auth.login')} onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  )
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WelcomeScreen.defaultProps = {}

export default WelcomeScreen
