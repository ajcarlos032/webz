import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Keyboard, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import RNOtpVerify from 'react-native-otp-verify'

import AuthActions from '@store/Auth/Actions'
import { authSelector } from '@store/Auth/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import OTPCode from '@components/OTPCode'
import PrimaryButton from '@components/Buttons/primaryButton'
import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'

import { LOGIN_METHOD, PHONE_VERIFICATION_ACTIONS } from '@screens/Auth/shared/constants'
import { IS_IOS } from '@root/constants'
import sharedStyles from '@screens/Auth/shared/sharedStyles'
import styles from './styles'

const CELL_COUNT = 5

const VerifyCodeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)
  const { t } = useContext(I18nContext)
  const [code, setCode] = useState('')
  const [time, setTime] = useState(60)
  const [resent, setResent] = useState(false)

  const { verifyCodeLoading, verificationCodeForRestoreLoading } = useSelector(authSelector)

  const { action, phone } = route?.params || {}

  useEffect(() => {
    const countDown = setInterval(() => setTime((_t) => Math.max(0, _t - 1)), 1000)
    return () => clearInterval(countDown)
  }, [time])

  useEffect(() => {
    if (IS_IOS) return
    RNOtpVerify.getHash().then(console.log).catch(console.log)
  }, [])

  useEffect(() => {
    if (time === 0) {
      const _phone = (phone || '').replace(/ /g, '')
      if (action === PHONE_VERIFICATION_ACTIONS.RESTORE_PASSWORD) {
        dispatch(
          AuthActions.restorePassword({ phone: _phone, test: __DEV__ }, () => {
            setResent(true)
          }),
        )
      } else {
        dispatch(
          AuthActions.verificationCode({ phone: _phone }, () => {
            setResent(true)
          }),
        )
      }
    }
  }, [time, action, phone, dispatch])

  const onRetrieveOTP = useCallback(
    (otp) => {
      setCode(otp)
      Keyboard.dismiss()
      onSubmit(otp)
    },
    [onSubmit],
  )

  useEffect(() => {
    if (!IS_IOS) {
      RNOtpVerify.getOtp()
        .then(() =>
          RNOtpVerify.addListener((message) => {
            try {
              const otp = /(\d{5})/g.exec(message)[1]
              onRetrieveOTP(otp)
            } catch (error) {
              console.log({ OTP_ERROR: error })
            }
          }),
        )
        .catch((p) => console.log(p))
    }

    return () => {
      if (!IS_IOS) {
        RNOtpVerify.removeListener()
      }
    }
  }, [onRetrieveOTP])

  const timeOut = useMemo(() => `0:${Math.floor(time / 10)}${time % 10}`, [time])

  const canSubmit = useMemo(
    () =>
      !verifyCodeLoading &&
      !verificationCodeForRestoreLoading &&
      code &&
      code.length === CELL_COUNT,
    [code, verifyCodeLoading, verificationCodeForRestoreLoading],
  )

  const onSubmit = useCallback(
    (otp) => {
      const _phone = phone.replace(/ /g, '')
      if (action === PHONE_VERIFICATION_ACTIONS.RESTORE_PASSWORD) {
        dispatch(
          AuthActions.verificationCodeForRestore(
            { code: otp, phone: _phone, test: __DEV__ },
            (token) => {
              RNOtpVerify.removeListener()
              navigation.navigate('RestoreForm', { token })
            },
          ),
        )
      } else {
        dispatch(
          AuthActions.logIn({ code: otp, phone: _phone, test: __DEV__ }, LOGIN_METHOD.PHONE, () => {
            RNOtpVerify.removeListener()
          }),
        )
      }
    },
    [action, phone, dispatch, navigation],
  )

  return (
    <AuthScreenWrapper loading={verifyCodeLoading || verificationCodeForRestoreLoading}>
      <View style={sharedStyles.container}>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={sharedStyles.scrollView}
        >
          <View style={[sharedStyles.titleContainer, styles.titleContainer]}>
            <Text style={sharedStyles.title}>{t('auth.whatsTheCode')}</Text>
          </View>
          <View style={sharedStyles.divider} />
          <View style={sharedStyles.form}>
            <OTPCode cellCount={CELL_COUNT} value={code} setValue={setCode} isRTL={isRTL} />
            <View style={styles.messageRow}>
              <Text style={styles.message}>{t('auth.enterTheCodeSentTo')}</Text>
              <Text style={styles.phoneNumber}>{route?.params?.phone}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{resent ? t('auth.resentSMS') : t('auth.sendsSMSAfter')}</Text>
          {!resent && <Text style={styles.time}>{timeOut}</Text>}
        </View>
        <View style={styles.formButtonContainer}>
          <PrimaryButton
            text={
              action === PHONE_VERIFICATION_ACTIONS.RESTORE_PASSWORD
                ? t('auth.restore')
                : t('auth.login')
            }
            onPress={() => onSubmit(code)}
            disabled={!canSubmit}
          />
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

VerifyCodeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

VerifyCodeScreen.defaultProps = {}

export default VerifyCodeScreen
