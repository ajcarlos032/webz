import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, Image, Keyboard, ScrollView, Text, View } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'
import FormError from '@components/FormError'

import SuccessModal from './components/SuccessModal'

import { IS_IOS } from '@root/constants'
import styles, { BUTTON_CONTAINER_HEIGHT } from './styles'

const carIcon = require('@assets/icons/ic_img_car.png')

const CarNumberForm = ({ successModalDescription, onCloseSuccessModal, awareKeyboard }) => {
  const dispatch = useDispatch()
  const offsetY = useRef(new Animated.Value(0))
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const [label, setLabel] = useState(null)
  const [number, setNumber] = useState(null)
  const [numberPlaceholder, setNumberPlaceholder] = useState('..-...-...')
  const [error, setError] = useState({})

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const { addCarNumberLoading } = useSelector(userSelector)

  const onKeyboardDidShow = useCallback((event) => {
    if (IS_IOS) {
      const keyboardHeight = event.endCoordinates.height
      Animated.timing(offsetY.current, {
        duration: 200,
        toValue: -(keyboardHeight - BUTTON_CONTAINER_HEIGHT),
        useNativeDriver: true,
      }).start()
    }
  }, [])

  const onKeyboardDidHide = useCallback(() => {
    if (IS_IOS) {
      Animated.timing(offsetY.current, {
        duration: 50,
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }, [])

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)

    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [onKeyboardDidShow, onKeyboardDidHide])

  const validate = useCallback(() => {
    const _error = {}

    if (!label) _error.label = t('auth.carNumberLabelEmptyError')
    if (!number) _error.number = t('auth.carNumberEmptyError')
    if (number?.length < 8) _error.number = t('auth.carNumberError')
    setError(_error)
    return !Boolean(Object.keys(_error).length)
  }, [label, number, t])

  useEffect(() => {
    setError((e) => (label ? { ...e, label: '' } : e))
  }, [label])

  useEffect(() => {
    setError((e) => (number ? { ...e, number: '' } : e))
  }, [number])

  const onSave = useCallback(() => {
    if (validate()) {
      dispatch(
        UserActions.addCarNumber({ label, number }, () => {
          setShowSuccessModal(true)
        }),
      )
    }
  }, [validate, number, label, dispatch])

  const onChangeCarNumber = useCallback(
    (formatted) => {
      setNumber(formatted)
    },
    [setNumber],
  )

  const onCloseModal = useCallback(() => {
    setShowSuccessModal(false)
    onCloseSuccessModal()
  }, [onCloseSuccessModal])

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContainer}
    >
      <Animated.View
        style={[
          styles.container,
          awareKeyboard && { transform: [{ translateY: offsetY.current }] },
        ]}
      >
        <View style={styles.descriptionContainer}>
          <View style={styles.imageContainer}>
            <Image source={carIcon} style={styles.icon} />
          </View>
          <Text style={styles.description}>{t('account.carNumberDescription')}</Text>
        </View>
        <View style={styles.fields}>
          <FloatingLabelInput
            value={label}
            label={t('auth.name')}
            onChange={setLabel}
            error={error.label}
            isRTL={isRTL}
          />
          <View style={[styles.field, !!error.number && styles.errorField]}>
            <TextInputMask
              onChangeText={onChangeCarNumber}
              mask="[00]-[000]-[000]"
              placeholder={numberPlaceholder}
              keyboardType="numbers-and-punctuation"
              value={number}
              onFocus={() => setNumberPlaceholder(null)}
              onBlur={() => setNumberPlaceholder('..-...-...')}
              style={[styles.carNumber, error.label && styles.error, isRTL && styles.rtlInput]}
            />
          </View>
          {!!error.number && <FormError error={error.number} />}
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('common.save')} disabled={addCarNumberLoading} onPress={onSave} />
        </View>
      </Animated.View>
      {showSuccessModal && (
        <SuccessModal description={successModalDescription} onClose={onCloseModal} />
      )}
    </ScrollView>
  )
}

CarNumberForm.propTypes = {
  awareKeyboard: PropTypes.bool,
  onCloseSuccessModal: PropTypes.func,
  successModalDescription: PropTypes.string.isRequired,
}

CarNumberForm.defaultProps = {
  awareKeyboard: false,
  onCloseSuccessModal: () => null,
}

export default CarNumberForm
