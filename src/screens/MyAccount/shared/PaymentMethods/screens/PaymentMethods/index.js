import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import PaymentMethod from './paymentMethod'

import { paymentMethods } from '@temp/paymentMethods'

import styles from './styles'

const PaymentMethods = ({ navigation }) => {
  const { t } = useContext(I18nContext)

  const onAdd = useCallback(() => navigation.navigate('AddNewPayment'), [navigation])

  const onChangeDefault = useCallback(() => {
    console.log('Setting default payment method...')
  }, [])

  const onRemove = useCallback(() => {
    console.log('Removing payment method...')
  }, [])

  return (
    <AccountScreenWrapper title={t('account.paymentMethods')}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <View style={styles.paymentMethods}>
          {paymentMethods.map((paymentMethod, index) => (
            <PaymentMethod
              key={index}
              paymentMethod={paymentMethod}
              onChangeDefault={onChangeDefault}
              onRemove={onRemove}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('account.addPaymentMethod')} onPress={onAdd} />
        </View>
      </ScrollView>
    </AccountScreenWrapper>
  )
}

PaymentMethods.propTypes = {
  navigation: PropTypes.object.isRequired,
}

PaymentMethods.defaultProps = {}

export default PaymentMethods
