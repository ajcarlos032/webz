import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import AuthActions from '@store/Auth/Actions'
import { authSelector } from '@store/Auth/Select'

import I18nContext from '@root/i18n/I18nContext'

import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'
import AuthScreenWrapper from '@screens/Auth/shared/AuthScreenWrapper'

import SuccessModal from './successModal'

import sharedStyles from '@screens/Auth/shared/sharedStyles'
import styles from './styles'

const RestoreEmailScreen = () => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)

  const [email, setEmail] = useState(null)
  const [error, setError] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const { restorePasswordLoading } = useSelector(authSelector)

  const canSubmit = useMemo(() => !restorePasswordLoading && email, [email, restorePasswordLoading])

  const onSubmit = useCallback(() => {
    if (!email) {
      setError(t('auth.emailEmptyError'))
      return
    }
    if (email) {
      const re = /\S+@\S+\.\S+/
      const emailTest = re.test(email)
      if (!emailTest) {
        setError(t('auth.emailIncorrectError'))
        return
      }
    }

    dispatch(
      AuthActions.restorePassword({ email }, () => {
        setShowSuccessModal(true)
      }),
    )
  }, [t, dispatch, email])

  useEffect(() => {
    if (email) setError(null)
  }, [email, setError])

  const onModalClose = useCallback(() => {
    setShowSuccessModal(false)
  }, [])

  return (
    <AuthScreenWrapper loading={restorePasswordLoading}>
      <View style={sharedStyles.container}>
        <View style={[sharedStyles.titleContainer, styles.titleContainer]}>
          <Text style={sharedStyles.title}>{t('auth.restorePassword')}</Text>
        </View>
        <View style={sharedStyles.divider} />
        <View style={sharedStyles.form}>
          <View style={sharedStyles.formRow}>
            <FloatingLabelInput
              value={email}
              label={t('auth.email')}
              onChange={setEmail}
              error={error}
              isRTL={isRTL}
            />
          </View>
        </View>
        <View style={styles.formButtonContainer}>
          <PrimaryButton text={t('auth.restore')} onPress={onSubmit} disabled={!canSubmit} />
        </View>
        {showSuccessModal && <SuccessModal onClose={onModalClose} />}
      </View>
    </AuthScreenWrapper>
  )
}

RestoreEmailScreen.propTypes = {}

RestoreEmailScreen.defaultProps = {}

export default RestoreEmailScreen
