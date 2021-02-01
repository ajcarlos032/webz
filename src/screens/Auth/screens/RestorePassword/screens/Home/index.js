import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'
import { PHONE_VERIFICATION_ACTIONS } from '@screens/Auth/shared/constants'
import sharedStyles from '@screens/Auth/shared/sharedStyles'
import styles from './styles'

const emailIcon = require('@assets/icons/ic_email.png')
const phoneIcon = require('@assets/icons/ic_phone.png')
const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const HomeScreen = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  return (
    <AuthScreenWrapper>
      <View style={sharedStyles.container}>
        <View style={[sharedStyles.titleContainer, styles.titleContainer]}>
          <Text style={sharedStyles.title}>{t('auth.restorePassword')}</Text>
        </View>
        <View style={sharedStyles.divider} />
        <View style={styles.menuButtonsContainer}>
          <View style={[styles.menuButtonContainer, styles.dropShadow]}>
            <TouchableOpacity
              style={styles.menuButton}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('RestoreEmail')}
            >
              <View style={styles.buttonContainer}>
                <View style={[styles.iconContainer, styles.expandShadow]}>
                  <Image source={emailIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <Text style={styles.buttonText}>{t('auth.viaEmail')}</Text>
                <View style={styles.spacing} />
                <Image
                  style={styles.arrowIcon}
                  source={isRTL ? arrowRTLIcon : arrowIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.menuButtonContainer, styles.dropShadow]}>
            <TouchableOpacity
              style={styles.menuButton}
              activeOpacity={0.75}
              onPress={() =>
                // eslint-disable-next-line prettier/prettier
                navigation.navigate('PhoneVerification', { action: PHONE_VERIFICATION_ACTIONS.RESTORE_PASSWORD })}
            >
              <View style={styles.buttonContainer}>
                <View style={[styles.iconContainer, styles.expandShadow]}>
                  <Image source={phoneIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <Text style={styles.buttonText}>{t('auth.viaPhone')}</Text>
                <View style={styles.spacing} />
                <Image
                  style={styles.arrowIcon}
                  source={isRTL ? arrowRTLIcon : arrowIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

HomeScreen.defaultProps = {}

export default HomeScreen
