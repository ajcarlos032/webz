import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'

import AuthActions from '@store/Auth/Actions'
import { configSelector } from '@store/Config/Select'
import { authSelector } from '@store/Auth/Select'

import I18nContext from '@root/i18n/I18nContext'

import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'
import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'

import sharedStyles from '@screens/Auth/shared/sharedStyles'
import styles from './styles'

const RestoreFormScreen = ({ navigation, route }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)
  const token = route?.params.token

  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState({})

  const { setNewPasswordLoading } = useSelector(authSelector)

  const canSubmit = useMemo(() => !setNewPasswordLoading && password, [
    password,
    setNewPasswordLoading,
  ])

  const onSubmit = useCallback(() => {
    const _error = {}
    if (!password) {
      _error.password = t('auth.passwordEmptyError')
      setError(_error)
      return
    }

    if (password && password !== confirmPassword) {
      _error.confirmPassword = t('auth.passwordNotMatchError')
      setError(_error)
      return
    }

    dispatch(
      AuthActions.setNewPassword({
        new_password: password,
        password_confirmation: confirmPassword,
        token,
      }),
    )
  }, [t, dispatch, password, confirmPassword, token])

  const onBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      })
      navigation.dispatch(resetAction)
    }
  }, [navigation])

  useEffect(() => {
    setError((e) => (password && password === confirmPassword ? { ...e, confirmPassword: '' } : e))
  }, [confirmPassword, password])

  useEffect(() => {
    setError((e) => (password ? { ...e, password: '' } : e))
  }, [password])

  return (
    <AuthScreenWrapper loading={setNewPasswordLoading} onBack={onBack}>
      <View style={sharedStyles.container}>
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={sharedStyles.scrollView}
        >
          <View style={[sharedStyles.titleContainer, styles.titleContainer]}>
            <Text style={sharedStyles.title}>{t('auth.restorePassword')}</Text>
          </View>
          <View style={sharedStyles.divider} />
          <View style={sharedStyles.form}>
            <View style={sharedStyles.formRow}>
              <FloatingLabelInput
                value={password}
                label={t('auth.password')}
                onChange={setPassword}
                error={error.password}
                isRTL={isRTL}
                isSecurity
              />
            </View>
            <View style={sharedStyles.formRow}>
              <FloatingLabelInput
                value={confirmPassword}
                label={t('auth.rePassword')}
                onChange={setConfirmPassword}
                error={error.confirmPassword}
                isRTL={isRTL}
                isSecurity
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.formButtonContainer}>
          <PrimaryButton text={t('auth.restore')} onPress={onSubmit} disabled={!canSubmit} />
        </View>
      </View>
    </AuthScreenWrapper>
  )
}

RestoreFormScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

RestoreFormScreen.defaultProps = {}

export default RestoreFormScreen
