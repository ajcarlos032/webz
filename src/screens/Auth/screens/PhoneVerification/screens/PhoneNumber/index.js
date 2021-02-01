import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '@store/Auth/Actions'
import { authSelector } from '@store/Auth/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'
import CountryPicker from '@lib/CountryPicker'

import { PHONE_VERIFICATION_ACTIONS } from '@screens/Auth/shared/constants'

import sharedStyles from '@screens/Auth/shared/sharedStyles'
import styles from './styles'

const PhoneNumberScreen = ({ navigation, route }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const dispatch = useDispatch()
  const [countryCode, setCountryCode] = useState(__DEV__ ? '+61' : '+972')
  const [phone, setPhone] = useState(null)
  const [formattedPhone, setFormattedPhone] = useState('')
  const [error, setError] = useState(null)

  const {
    verificationCodeLoading,
    restorePasswordLoading,
    verificationCodeFailure,
    restorePasswordFailure,
  } = useSelector(authSelector)

  const canSubmit = useMemo(
    () => !verificationCodeLoading && !restorePasswordLoading && Boolean(phone),
    [phone, restorePasswordLoading, verificationCodeLoading],
  )

  const onSubmit = useCallback(() => {
    if (phone?.length < 9) {
      setError(t('auth.phoneNumberError'))
      return
    }

    if (route?.params?.action === PHONE_VERIFICATION_ACTIONS.RESTORE_PASSWORD) {
      dispatch(
        AuthActions.restorePassword({ phone: `${countryCode}${phone}`, test: __DEV__ }, () => {
          navigation.navigate('VerifyCode', {
            phone: formattedPhone,
          })
        }),
      )
    } else {
      dispatch(
        AuthActions.verificationCode({ phone: `${countryCode}${phone}` }, () => {
          navigation.navigate('VerifyCode', {
            phone: formattedPhone,
          })
        }),
      )
    }
  }, [phone, t, dispatch, countryCode, navigation, formattedPhone, route])

  useEffect(() => {
    if (phone && (verificationCodeFailure || restorePasswordFailure))
      setError(t('auth.phoneNumberError'))
  }, [t, phone, verificationCodeFailure, restorePasswordFailure])

  useEffect(() => {
    if (phone) setError(null)
  }, [phone, setError])

  const onChangePhone = useCallback(
    (formatted, extracted) => {
      setPhone(extracted)
      setFormattedPhone(`${countryCode} ${formatted}`)
    },
    [countryCode, setFormattedPhone, setPhone],
  )

  return (
    <AuthScreenWrapper loading={verificationCodeLoading || restorePasswordLoading}>
      <View style={sharedStyles.container}>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={sharedStyles.scrollView}
        >
          <View style={[sharedStyles.titleContainer, styles.titleContainer]}>
            <Text style={sharedStyles.title}>{t('auth.enterYourPhone')}</Text>
          </View>
          <View style={sharedStyles.divider} />
          <View style={sharedStyles.form}>
            <View
              style={[
                sharedStyles.formRow,
                styles.formRow,
                { flexDirection: isRTL ? 'row-reverse' : 'row' },
              ]}
            >
              <CountryPicker isRTL={isRTL} value={countryCode} onSelect={setCountryCode} />
              <View style={styles.vDivider} />
              <View style={styles.phoneNumberContainer}>
                <TextInputMask
                  onChangeText={onChangePhone}
                  mask="[000] [000] [000]"
                  placeholder="123 456 789"
                  multiline={false}
                  keyboardType="phone-pad"
                  value={phone}
                  editable={!verificationCodeLoading}
                  style={[styles.phoneNumber, error ? styles.error : null]}
                />
              </View>
            </View>
            {!!error && <Text style={styles.message}>{error}</Text>}
          </View>
        </ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{t('auth.verifyPhoneHelpText1')}</Text>
          <Text style={styles.info}>{t('auth.verifyPhoneHelpText2')}</Text>
        </View>
        <View style={styles.formButtonContainer}>
          <PrimaryButton text={t('auth.next')} onPress={onSubmit} disabled={!canSubmit} />
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

PhoneNumberScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

PhoneNumberScreen.defaultProps = {}

export default PhoneNumberScreen
