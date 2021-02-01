import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import PrimaryButton from '@components/Buttons/primaryButton'
import FloatingLabelInput from '@components/form/FloatingLabelInput'

import Menus from './components/Menus'
import UserAvatar from './components/UserAvatar'

import styles from './styles'

const PersonalInformation = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const isFocused = useIsFocused()
  const { isRTL } = useSelector(configSelector)
  const [avatar, setAvatar] = useState(null)
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [error, setError] = useState({})

  const { me, updateProfileLoading } = useSelector(userSelector)

  useEffect(() => {
    setEmail(me.email)
    setName(me.name)
    setAvatar(null)
  }, [me, isFocused])

  const updateProfile = useCallback(() => {
    if (!validate()) return
    const payload = { email, name }
    if (avatar) payload.avatar = avatar

    dispatch(UserActions.updateProfile(payload))
  }, [avatar, email, name, validate, dispatch])

  const onPressMenu = useCallback((screen) => navigation.navigate(screen), [navigation])

  const onLoadAvatar = useCallback(
    (_avatar) => {
      if (_avatar?.uri) setAvatar(_avatar)
    },
    [setAvatar],
  )

  const validate = useCallback(() => {
    const _error = {}

    if (!email) _error.email = t('auth.emailEmptyError')
    if (!name) _error.name = t('auth.nameEmptyError')

    if (email) {
      const re = /\S+@\S+\.\S+/
      const emailTest = re.test(email)
      if (!emailTest) _error.email = t('auth.emailIncorrectError')
    }
    setError(_error)
    return !Boolean(Object.keys(_error).length)
  }, [email, name, t])

  useEffect(() => {
    setError((e) => (email ? { ...e, email: '' } : e))
  }, [email, setError])

  useEffect(() => {
    setError((e) => (name ? { ...e, name: '' } : e))
  }, [name, setError])

  return (
    <AccountScreenWrapper loading={updateProfileLoading} title={t('account.personalInformation')}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <Menus onPressMenu={onPressMenu} />
        <UserAvatar avatarUrl={me.avatar_url} avatar={avatar} onLoad={onLoadAvatar} />
        <View style={styles.fields}>
          <View style={styles.field}>
            <FloatingLabelInput
              value={name}
              label={t('auth.name')}
              onChange={setName}
              error={error.name}
              isRTL={isRTL}
            />
          </View>
          <View style={styles.field}>
            <FloatingLabelInput
              value={email}
              label={t('auth.email')}
              onChange={setEmail}
              error={error.email}
              isRTL={isRTL}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={t('common.save')}
            disabled={updateProfileLoading}
            onPress={updateProfile}
          />
        </View>
      </ScrollView>
    </AccountScreenWrapper>
  )
}

PersonalInformation.propTypes = {
  navigation: PropTypes.object.isRequired,
}

PersonalInformation.defaultProps = {}

export default PersonalInformation
