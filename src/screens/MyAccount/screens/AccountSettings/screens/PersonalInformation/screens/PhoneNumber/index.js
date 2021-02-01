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

import OTPModal from './components/OTPModal'
import SuccessModal from './components/SuccessModal'

import styles from './styles'

const phoneIcon = require('@assets/icons/ic_img_phone.png')

const PhoneNumber = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const isFocused = useIsFocused()
  const { isRTL } = useSelector(configSelector)

  const [phone, setPhone] = useState(null)
  const [error, setError] = useState(null)
  const [showOTPModal, setShowOTPModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const {
    me: { phone: _phone },
    updatePhoneLoading,
  } = useSelector(userSelector)

  useEffect(() => {
    setPhone(_phone)
  }, [isFocused, _phone])

  const validate = useCallback(() => {
    let _error = null

    if (!phone) _error = t('auth.phoneNumberEmptyError')
    if (phone?.length < 9) _error = t('auth.phoneNumberError')
    setError(_error)
    return !Boolean(_error)
  }, [phone, t])

  useEffect(() => {
    setError((e) => (phone ? null : e))
  }, [phone, setError])

  const updatePhone = useCallback(() => {
    if (!validate()) return
    dispatch(
      UserActions.updatePhone({ first: true, phone }, () => {
        setShowOTPModal(true)
      }),
    )
  }, [phone, validate, dispatch])

  const onVerifyCode = useCallback(
    (payload) => {
      dispatch(
        UserActions.updatePhone(payload, () => {
          setShowOTPModal(false)
          setShowSuccessModal(true)
        }),
      )
    },
    [dispatch],
  )

  const onCloseSuccessModal = useCallback(() => {
    setShowSuccessModal(false)
    navigation.goBack()
  }, [navigation])

  return (
    <AccountScreenWrapper loading={updatePhoneLoading} title={t('account.phoneNumber')}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <View style={styles.descriptionContainer}>
          <View style={styles.imageContainer}>
            <Image source={phoneIcon} style={styles.icon} />
          </View>
          <Text style={styles.description}>{t('account.phoneDescription')}</Text>
        </View>
        <View style={styles.fields}>
          <View style={styles.field}>
            <FloatingLabelInput
              value={phone}
              label={t('account.phoneNumber')}
              keyboard="phone-pad"
              onChange={setPhone}
              error={error}
              isRTL={isRTL}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={t('common.save')}
            disabled={updatePhoneLoading}
            onPress={updatePhone}
          />
        </View>
      </ScrollView>
      {showOTPModal && (
        <OTPModal
          phone={phone}
          loading={updatePhoneLoading}
          onClose={() => setShowOTPModal(false)}
          onVerify={onVerifyCode}
        />
      )}
      {showSuccessModal && <SuccessModal onClose={onCloseSuccessModal} />}
    </AccountScreenWrapper>
  )
}

PhoneNumber.propTypes = {
  navigation: PropTypes.object.isRequired,
}

PhoneNumber.defaultProps = {}

export default PhoneNumber
