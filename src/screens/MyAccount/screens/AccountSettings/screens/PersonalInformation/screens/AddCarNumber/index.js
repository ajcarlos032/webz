import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import CardNumberForm from '@screens/MyAccount/shared/CarNumber/Form'

const AddCarNumber = ({ navigation }) => {
  const { t } = useContext(I18nContext)

  const { addCarNumberLoading } = useSelector(userSelector)

  return (
    <AccountScreenWrapper loading={addCarNumberLoading} title={t('account.carNumber')}>
      <CardNumberForm
        successModalDescription={t('account.carNumberAdded')}
        onCloseSuccessModal={() => navigation.goBack()}
      />
    </AccountScreenWrapper>
  )
}

AddCarNumber.propTypes = {
  navigation: PropTypes.object.isRequired,
}

AddCarNumber.defaultProps = {}

export default AddCarNumber
