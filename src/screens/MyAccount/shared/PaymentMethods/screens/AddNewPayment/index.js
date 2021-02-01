import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import CardInfo from './cardInfo'
import CardForm from './cardForm'

import styles from './styles'

const AddNewPayment = () => {
  const { t } = useContext(I18nContext)

  const [number, setNumber] = useState(null)
  const [holder, setHolder] = useState(null)
  const [date, setDate] = useState(null)
  const [cvc, setCvc] = useState(null)

  const [errors, setErrors] = useState({})

  const validate = useCallback(() => {
    const _errors = {}

    if (!number) _errors.number = t('account.emptyError')
    if (!holder) _errors.holder = t('account.emptyError')
    if (!date) _errors.date = t('account.emptyError')
    if (!cvc) _errors.cvc = t('account.emptyError')

    if (number && number.length < 19) _errors.number = t('account.invalidError')
    if (date && date.length < 5) _errors.date = t('account.invalidError')

    setErrors(_errors)
    return !Boolean(Object.keys(_errors).length)
  }, [number, holder, date, cvc, t])

  useEffect(() => {
    setErrors((e) => (number ? { ...e, number: '' } : e))
  }, [number])

  useEffect(() => {
    setErrors((e) => (holder ? { ...e, holder: '' } : e))
  }, [holder])

  useEffect(() => {
    setErrors((e) => (date ? { ...e, date: '' } : e))
  }, [date])

  useEffect(() => {
    setErrors((e) => (cvc ? { ...e, cvc: '' } : e))
  }, [cvc])

  const onSave = useCallback(() => {
    if (validate()) {
      console.log('validated')
    }
  }, [validate])

  return (
    <AccountScreenWrapper title={t('account.addNewPayment')} noBorder>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.container}>
          <CardInfo number={number} holder={holder} date={date} />
          <CardForm
            number={number}
            setNumber={setNumber}
            holder={holder}
            setHolder={setHolder}
            date={date}
            setDate={setDate}
            cvc={cvc}
            setCvc={setCvc}
            errors={errors}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton text={t('common.save')} onPress={onSave} />
          </View>
        </View>
      </ScrollView>
    </AccountScreenWrapper>
  )
}

AddNewPayment.propTypes = {}

AddNewPayment.defaultProps = {}

export default AddNewPayment
