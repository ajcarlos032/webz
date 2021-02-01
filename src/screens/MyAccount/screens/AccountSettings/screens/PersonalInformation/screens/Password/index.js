import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import FloatingLabelInput from '@components/form/FloatingLabelInput'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import styles from './styles'

const securityIcon = require('@assets/icons/ic_img_security.png')

const Password = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const isFocused = useIsFocused()
  const { isRTL } = useSelector(configSelector)
  const [old_password, setOldPassword] = useState(null)
  const [new_password, setNewPassword] = useState(null)
  const [password_confirmation, setPasswordConfirmation] = useState(null)
  const [error, setError] = useState({})

  const { updatePasswordLoading } = useSelector(userSelector)

  useEffect(() => {
    setOldPassword(null)
    setNewPassword(null)
  }, [isFocused])

  const validate = useCallback(() => {
    const _error = {}

    if (!old_password) _error.oldPassword = t('auth.oldPasswordEmptyError')
    if (!new_password) _error.password = t('auth.passwordEmptyError')

    if (new_password && new_password !== password_confirmation)
      _error.confirmPassword = t('auth.passwordNotMatchError')

    setError(_error)
    return !Boolean(Object.keys(_error).length)
  }, [old_password, new_password, password_confirmation, t])

  const updatePassword = useCallback(() => {
    if (!validate()) return
    const payload = { new_password, old_password, password_confirmation }
    dispatch(
      UserActions.updatePassword(payload, () => {
        navigation.goBack()
      }),
    )
  }, [validate, new_password, old_password, password_confirmation, dispatch, navigation])

  useEffect(() => {
    setError((e) => (old_password ? { ...e, oldPassword: '' } : e))
  }, [old_password])

  useEffect(() => {
    setError((e) => (new_password ? { ...e, password: '' } : e))
  }, [new_password])

  useEffect(() => {
    setError((e) =>
      new_password && new_password === password_confirmation ? { ...e, confirmPassword: '' } : e,
    )
  }, [password_confirmation, new_password])

  return (
    <AccountScreenWrapper loading={updatePasswordLoading} title={t('account.password')}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <View style={styles.descriptionContainer}>
          <View style={styles.imageContainer}>
            <Image source={securityIcon} style={styles.icon} />
          </View>
          <Text style={styles.description}>{t('account.passwordDescription')}</Text>
        </View>
        <View style={styles.fields}>
          <View style={styles.field}>
            <FloatingLabelInput
              value={old_password}
              label={t('auth.oldPassword')}
              onChange={setOldPassword}
              error={error.oldPassword}
              isRTL={isRTL}
              isSecurity
            />
          </View>
          <View style={styles.field}>
            <FloatingLabelInput
              value={new_password}
              label={t('auth.password')}
              onChange={setNewPassword}
              error={error.password}
              isRTL={isRTL}
              isSecurity
            />
          </View>
          <View style={styles.field}>
            <FloatingLabelInput
              value={password_confirmation}
              label={t('auth.rePassword')}
              onChange={setPasswordConfirmation}
              error={error.confirmPassword}
              isRTL={isRTL}
              isSecurity
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={t('common.save')}
            disabled={updatePasswordLoading}
            onPress={updatePassword}
          />
        </View>
      </ScrollView>
    </AccountScreenWrapper>
  )
}

Password.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Password.defaultProps = {}

export default Password
