import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '@store/Auth/Actions'
import { configSelector } from '@store/Config/Select'
import { authSelector } from '@store/Auth/Select'

import I18nContext from '@root/i18n/I18nContext'

import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'
import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles from '@screens/Auth/shared/sharedStyles'

const SignUpScreen = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [password_confirmation, setPasswordConfirmation] = useState(null)
  const [error, setError] = useState({})

  const { signUpLoading } = useSelector(authSelector)

  const canSubmit = useMemo(() => !signUpLoading && (email || name || password), [
    email,
    name,
    password,
    signUpLoading,
  ])

  const validate = useCallback(
    (_confirmPassword, _email, _name, _password) => {
      const _error = {}

      if (!_name) _error.name = t('auth.nameEmptyError')

      if (_email) {
        const re = /\S+@\S+\.\S+/
        const emailTest = re.test(_email)
        if (!emailTest) _error.email = t('auth.emailIncorrectError')
      } else {
        _error.email = t('auth.emailEmptyError')
      }

      if (_password) {
        if (_password.length < 6) _error.password = t('auth.passwordShortError')
        if (_password !== _confirmPassword) _error.confirmPassword = t('auth.passwordNotMatchError')
      } else {
        _error.password = t('auth.passwordEmptyError')
      }

      setError(_error)
      return !Boolean(Object.keys(_error).length)
    },
    [t, setError],
  )

  const onSignUp = useCallback(() => {
    if (validate(password_confirmation, email, name, password)) {
      dispatch(
        AuthActions.signUp({ email, name, password, password_confirmation }, () => {
          navigation.navigate('SignUpSuccess')
        }),
      )
    }
  }, [password_confirmation, dispatch, email, name, password, navigation, validate])

  useEffect(() => {
    setError((e) => (email ? { ...e, email: '' } : e))
  }, [email, setError])

  useEffect(() => {
    setError((e) => (name ? { ...e, name: '' } : e))
  }, [name, setError])

  useEffect(() => {
    setError((e) => (password ? { ...e, password: '' } : e))
  }, [password, setError])

  useEffect(() => {
    setError((e) =>
      password && password === password_confirmation ? { ...e, confirmPassword: '' } : e,
    )
  }, [password_confirmation, password, setError])

  return (
    <AuthScreenWrapper loading={signUpLoading}>
      <View style={styles.container}>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('auth.personalInformation')}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.form}>
            <View style={styles.formRow}>
              <FloatingLabelInput
                value={name}
                label={t('auth.name')}
                onChange={setName}
                error={error.name}
                isRTL={isRTL}
              />
            </View>
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
            <View style={styles.formRow}>
              <FloatingLabelInput
                value={password_confirmation}
                label={t('auth.rePassword')}
                onChange={setPasswordConfirmation}
                error={error.confirmPassword}
                isSecurity
                isRTL={isRTL}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('auth.next')} onPress={onSignUp} disabled={!canSubmit} />
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

SignUpScreen.defaultProps = {}

export default SignUpScreen
