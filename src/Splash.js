import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { I18nManager, Image, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import BootSplash from 'react-native-bootsplash'
import { Host } from 'react-native-portalize'
import { useDispatch, useSelector } from 'react-redux'
import * as RNLocalize from 'react-native-localize'

import AuthActions from '@store/Auth/Actions'
import ConfigActions from '@store/Config/Actions'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import { RH } from '@theme/utils'
import { DARK_BLUE, OVERLAY, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_LG, LINE_HEIGHT28 } from '@theme/fonts'
import {
  APP_LANGUAGES,
  APP_LANG_KEY,
  APP_TOKEN_KEY,
  DIM_H5,
  DIM_H7,
  DIM_V7,
  HORIZONTAL_DIM,
  SCREEN_HEIGHT,
} from '@root/constants'

const bootSplashLogo = require('@assets/images/bootsplash_logo.png')
const loadingSpinner = require('@assets/images/spinner.gif')

const Splash = ({ onLoadEnd }) => {
  const { t, i18n } = useContext(I18nContext)
  const { acceptLocation, acceptLocationLoading } = useSelector(configSelector)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoaded(true)
    }, 1000)

    return () => clearTimeout(timeOut)
  }, [])

  useEffect(() => {
    if (!acceptLocation) return

    const setLocale = () => {
      AsyncStorage.getItem(APP_LANG_KEY).then((lang) => {
        const localeData = RNLocalize.getLocales()
        let language = lang
        if (!language) {
          const currentDeviceLang =
            localeData[0]?.languageCode || localeData?.languageCode || APP_LANGUAGES.EN
          language = currentDeviceLang === APP_LANGUAGES.HE ? APP_LANGUAGES.HE : APP_LANGUAGES.EN
        }

        i18n.changeLanguage(language)
        dispatch(ConfigActions.changeLanguage(language))
        I18nManager.forceRTL(language === APP_LANGUAGES.HE)
      })
    }

    const checkAuthState = async () => {
      BootSplash.hide()
      setCheckingAuth(true)
      try {
        const token = await AsyncStorage.getItem(APP_TOKEN_KEY)
        dispatch(AuthActions.setAuthenticated(Boolean(token)))
      } catch (e) {
        console.log('Auth Check failure: ', e)
      } finally {
        setCheckingAuth(false)
        onLoadEnd(false)
      }
    }

    if (loaded) {
      setLocale()
      checkAuthState()
    }
  }, [i18n, dispatch, acceptLocation, loaded, onLoadEnd])

  const onAcceptLocationUsage = useCallback(() => {
    dispatch(ConfigActions.acceptLocation())
  }, [dispatch])

  return (
    <Host>
      <View style={styles.container}>
        <Image source={bootSplashLogo} />
        <View style={styles.spinnerContainer}>
          {checkingAuth && <Image source={loadingSpinner} style={styles.spinner} />}
        </View>
        {!acceptLocation && (
          <Modal
            isVisible
            animationIn="bounceInUp"
            animationOut="bounceInDown"
            swipeEnabled={false}
            modalStyle={styles.modal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.body}>
                <Text style={styles.title}>{t('common.locationUsage')}</Text>
                <PrimaryButton
                  text={t('common.agree')}
                  disabled={acceptLocationLoading}
                  onPress={onAcceptLocationUsage}
                />
              </View>
            </View>
          </Modal>
        )}
      </View>
    </Host>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    marginVertical: RH(25),
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
  },
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modal: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: OVERLAY,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  spinner: {
    height: 50,
    width: 50,
  },
  spinnerContainer: {
    bottom: (3 * SCREEN_HEIGHT) / 10,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
  successIcon: {
    height: RH(85),
    resizeMode: 'contain',
    width: RH(85),
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_LG,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V7,
    textAlign: 'center',
  },
})

Splash.propTypes = {
  onLoadEnd: PropTypes.func.isRequired,
}

export default Splash
