import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import AuthActions from '@store/Auth/Actions'

import I18nContext from '@root/i18n/I18nContext'

import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'
import PrimaryButton from '@components/Buttons/primaryButton'
import SecondaryButton from '@components/Buttons/secondaryButton'

import { PHONE_VERIFICATION_ACTIONS } from '@screens/Auth/shared/constants'

import styles from './styles'

const successImage = require('@assets/images/img_reg_success.png')

const SignUpSuccessScreen = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()

  return (
    <AuthScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={successImage} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{t('auth.successfulRegistration')}</Text>
            <Text style={styles.message}>{t('auth.lorem')}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={t('auth.continue')}
              onPress={() => dispatch(AuthActions.setAuthenticated(true))}
            />
            <SecondaryButton
              text={t('auth.verifyPhoneNumber')}
              onPress={() =>
                // eslint-disable-next-line prettier/prettier
                navigation.navigate('PhoneVerification', { action: PHONE_VERIFICATION_ACTIONS.LOG_IN })}
            />
          </View>
        </View>
      </ScrollView>
    </AuthScreenWrapper>
  )
}

SignUpSuccessScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

SignUpSuccessScreen.defaultProps = {}

export default SignUpSuccessScreen
