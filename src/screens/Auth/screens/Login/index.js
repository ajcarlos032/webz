import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '@store/Auth/Actions'
import { authSelector } from '@store/Auth/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'
import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'
import PureButton from '@components/Buttons/pureButton'

import { LOGIN_METHOD, PHONE_VERIFICATION_ACTIONS } from '@screens/Auth/shared/constants'

import styles from '@screens/Auth/shared/sharedStyles'

const LoginScreen = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState({})

  const { logInLoading } = useSelector(authSelector)

  const canSubmit = useMemo(() => !logInLoading && (email || password), [
    email,
    password,
    logInLoading,
  ])

  const validate = useCallback(
    (_email, _password) => {
      const _error = {}

      if (!_email) _error.email = t('auth.emailEmptyError')
      if (!_password) _error.password = t('auth.passwordEmptyError')

      if (_email) {
        const re = /\S+@\S+\.\S+/
        const emailTest = re.test(_email)
        if (!emailTest) _error.email = t('auth.emailIncorrectError')
      }

      setError(_error)
      return !Boolean(Object.keys(_error).length)
    },
    [t],
  )

  const onLogin = useCallback(() => {
    if (validate(email, password)) {
      dispatch(AuthActions.logIn({ email, password }, LOGIN_METHOD.EMAIL))
    }
  }, [dispatch, email, password, validate])

  useEffect(() => {
    setError((e) => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError((e) => (password ? { ...e, password: '' } : e))
  }, [password])

  return (
    <AuthScreenWrapper loading={logInLoading}>
      <View style={styles.container}>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('auth.login')}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.form}>
            <View style={styles.formRow}>
              <FloatingLabelInput
                value={email}
                label={t('auth.email')}
                onChange={setEmail}
                error={error.email}
                isRTL={isRTL}
              />
            </View>
            <View style={styles.formRow}>
              <FloatingLabelInput
                value={password}
                label={t('auth.password')}
                onChange={setPassword}
                error={error.password}
                isSecurity
                isRTL={isRTL}
              />
            </View>
            <TouchableOpacity
              style={styles.phoneLoginContainer}
              onPress={() =>
                // eslint-disable-next-line prettier/prettier
                navigation.navigate('PhoneVerification', { action: PHONE_VERIFICATION_ACTIONS.LOG_IN })}
            >
              <Text style={styles.phoneLogin}>{t('auth.loginByPhone')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <PureButton
            text={t('auth.restorePassword')}
            onPress={() => navigation.navigate('RestorePassword')}
          />
          <PrimaryButton text={t('auth.login')} onPress={onLogin} disabled={!canSubmit} />
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

LoginScreen.defaultProps = {}

export default LoginScreen
