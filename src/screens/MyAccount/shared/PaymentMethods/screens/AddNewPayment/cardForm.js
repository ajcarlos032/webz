import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import InputField from './inputField'

import styles from './styles'

const CardForm = ({ number, setNumber, holder, setHolder, date, setDate, cvc, setCvc, errors }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.formContainer}>
      <View style={styles.row}>
        <InputField
          label={t('account.cardNumber')}
          placeholder="1111 1111 1111 1111"
          pattern="[0000] [0000] [0000] [0000]"
          error={errors.number}
          value={number}
          onChange={setNumber}
        />
      </View>
      <View style={styles.row}>
        <InputField
          label={t('account.cardHolder')}
          placeholder="Captain America"
          pureText
          error={errors.holder}
          value={holder}
          onChange={setHolder}
        />
      </View>
      <View style={styles.row}>
        <InputField
          label={t('account.date')}
          placeholder="12/20"
          pattern="[00]/[00]"
          error={errors.date}
          value={date}
          onChange={setDate}
        />
        <View style={styles.space} />
        <InputField
          label={t('account.cvc')}
          placeholder="123"
          pattern="[000]"
          error={errors.cvc}
          value={cvc}
          onChange={setCvc}
        />
      </View>
    </View>
  )
}

CardForm.propTypes = {
  cvc: PropTypes.string,
  date: PropTypes.string,
  errors: PropTypes.object,
  holder: PropTypes.string,
  number: PropTypes.string,
  setCvc: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  setHolder: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
}

CardForm.defaultProps = {
  cvc: null,
  date: null,
  errors: {},
  holder: null,
  number: null,
}

export default CardForm
