import React, { useCallback, useContext } from 'react'
import { Image, I18nManager, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import RNRestart from 'react-native-restart'
import { useDispatch, useSelector } from 'react-redux'

import ConfigActions from '@store/Config/Actions'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import { LANGUAGE_ICONS } from './shared/languageIcons'

import { APP_LANGUAGES } from '@root/constants'

import styles from './styles'

const Language = () => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()

  const { lang } = useSelector(configSelector)

  const onChangeLanguage = useCallback(
    async (language) => {
      // these languages are not available
      if ([APP_LANGUAGES.FR, APP_LANGUAGES.SP].includes(language)) return

      const isRTL = language === APP_LANGUAGES.HE
      dispatch(
        ConfigActions.changeLanguage(language, async () => {
          if (!isRTL) {
            if (I18nManager.isRTL) await I18nManager.forceRTL(false)
          } else if (!I18nManager.isRTL) await I18nManager.forceRTL(true)

          RNRestart.Restart()
        }),
      )
    },
    [dispatch],
  )

  const renderLanguageItem = useCallback(
    (language) => (
      <View key={language} style={styles.languageContainer}>
        <View style={styles.languageField}>
          <Image source={LANGUAGE_ICONS[language]} style={styles.languageIcon} />
          <Text style={styles.language}>{t(`account.${language}`)}</Text>
          <View style={styles.spacing} />
          <TouchableOpacity
            style={styles.changeLanguageButton}
            onPress={() => onChangeLanguage(language)}
          >
            <View style={[styles.mark, language === lang && styles.currentLanguage]} />
          </TouchableOpacity>
        </View>
      </View>
    ),
    [t, lang, onChangeLanguage],
  )

  return (
    <AccountScreenWrapper title={t('account.language')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.languages}>{Object.values(APP_LANGUAGES).map(renderLanguageItem)}</View>
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

Language.propTypes = {}

Language.defaultProps = {}

export default Language
