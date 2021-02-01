import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import { LANGUAGE_ICONS } from '../Language/shared/languageIcons'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const AccountSettings = ({ navigation }) => {
  const { t } = useContext(I18nContext)

  const { lang, isRTL } = useSelector(configSelector)

  return (
    <AccountScreenWrapper title={t('account.accountSettings')}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuRow}
          onPress={() => navigation.navigate('PersonalInformation')}
        >
          <Text style={styles.label}>{t('account.personalInformation')}</Text>
          <View style={styles.spacing} />
          <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuRow} onPress={() => navigation.navigate('MyLogos')}>
          <Text style={styles.label}>{t('account.myLogos')}</Text>
          <View style={styles.spacing} />
          <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuRow} onPress={() => navigation.navigate('Language')}>
          <Text style={styles.label}>{t('account.language')}</Text>
          <View style={styles.spacing} />
          <Image source={LANGUAGE_ICONS[lang]} style={styles.languageIcon} />
          <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </AccountScreenWrapper>
  )
}

AccountSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
}

AccountSettings.defaultProps = {}

export default AccountSettings
