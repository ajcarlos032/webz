/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { findIndex } from 'lodash-es'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import PrimaryButton from '@components/Buttons/primaryButton'

import PaymentCard from './components/paymentCard'
import SelectCredits from './components/selectCredits'
import CustomCredit from './components/customCredit'
import SuccessModal from './components/successModal'

import styles from './styles'

const CARD_TYPE = { MASTER: 'MasterCard', VISA: 'Visa' }

const AddCredits = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { credits, fetchCreditsLoading, addCreditsLoading } = useSelector(userSelector)

  const [cardType, setCardType] = useState(CARD_TYPE.VISA)
  const [credit, setCredit] = useState(null)
  const [customCredit, setCustomCredit] = useState(false)
  const [success, setSuccess] = useState(false) // test only

  useEffect(() => {
    dispatch(UserActions.fetchCredits())
  }, [dispatch])

  useEffect(() => {
    if (credits.length) {
      if (credit === null) setCredit(credits[0].id)
    }
  }, [credit, credits])

  const selectedCredit = useMemo(
    () => credits[findIndex(credits, (_credit) => +_credit.id === +credit)],
    [credits, credit],
  )

  const onAddPaymentMethod = useCallback(() => {
    navigation.navigate('PaymentMethods')
  }, [navigation])

  const onPay = useCallback(() => {
    console.log('on pay...')
    setSuccess(true)
  }, [])

  const onSelectCredit = useCallback((id) => {
    setCredit(id)
    setCustomCredit(false)
  }, [])

  const customMode = useCallback(() => {
    setCredit(0)
    setCustomCredit(true)
  }, [])

  const onCloseModal = useCallback(() => navigation.goBack(), [navigation])

  return (
    <AccountScreenWrapper
      loading={fetchCreditsLoading || addCreditsLoading}
      title={t('home.addCredits')}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.creditsSelectContainer}>
          <SelectCredits
            credits={credits}
            selected={credit}
            onSelect={onSelectCredit}
            onSelectOther={customMode}
            customCredit={customCredit}
          />
          {/** hide at the moment */}
          {/* {customCredit && <CustomCredit credit={credit} cost={7} onChange={setCredit} />} */}
        </View>
        {/*
        <View style={[styles.paymentMethods, styles.borderTop]}>
          <PaymentCard
            cardType={CARD_TYPE.VISA}
            cardNumber="5436 **** **** 6578"
            selected={cardType}
            onSelect={setCardType}
          />
          <PaymentCard
            cardType={CARD_TYPE.MASTER}
            cardNumber="1436 **** **** 6578"
            selected={cardType}
            onSelect={setCardType}
          />
        </View>
        */}
        {/* <View style={styles.addMethodContainer}>
          <TouchableOpacity style={styles.addButton} onPress={onAddPaymentMethod}>
            <Text style={styles.addButtonText}>{t('account.addPaymentMethod')}</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.footer}>
          {Boolean(selectedCredit) && (
            <View style={[styles.totalCreditsContainer, styles.borderTop]}>
              <Text style={styles.totalCredits}>
                {`${t('home.total')} ${selectedCredit.amount} ${t('home.credits')}`}
              </Text>
              <Text style={styles.credits}>{`$${selectedCredit.price}`}</Text>
            </View>
          )}

          <View style={styles.buttonContainer}>
            {/** disabled for testing */}
            <PrimaryButton disabled text={t('home.pay')} onPress={onPay} />
          </View>
        </View>
      </ScrollView>
      {success && <SuccessModal onClose={onCloseModal} />}
    </AccountScreenWrapper>
  )
}

AddCredits.propTypes = {
  navigation: PropTypes.object.isRequired,
}

AddCredits.defaultProps = {}

export default AddCredits
