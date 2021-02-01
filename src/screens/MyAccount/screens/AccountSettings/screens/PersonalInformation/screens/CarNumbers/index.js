import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import CardNumberList from '@screens/MyAccount/shared/CarNumber/List'

import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const CarNumbers = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const isFocused = useIsFocused()
  const [car_numbers, setCarNumbers] = useState([])

  const {
    me: { car_numbers: _car_numbers },
    setDefaultCarNumberLoading,
    deleteCarNumberLoading,
  } = useSelector(userSelector)

  useEffect(() => {
    setCarNumbers(_car_numbers)
  }, [isFocused, _car_numbers])

  const onAdd = useCallback(() => navigation.navigate('AddCarNumber'), [navigation])

  const onChangeDefault = useCallback(
    (id) => {
      const _carNumbers = car_numbers.map((cNumber) => {
        const c = { ...cNumber }
        c.default = c.id === id

        return c
      })

      setCarNumbers(_carNumbers)

      dispatch(UserActions.setDefaultCarNumber(id))
    },
    [car_numbers, dispatch, setCarNumbers],
  )

  return (
    <AccountScreenWrapper
      loading={setDefaultCarNumberLoading || deleteCarNumberLoading}
      title={t('account.carNumber')}
    >
      <CardNumberList carNumbers={car_numbers} onSelect={onChangeDefault} canRemove />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={t('account.addCarNumber')}
          disabled={setDefaultCarNumberLoading || deleteCarNumberLoading}
          onPress={onAdd}
        />
      </View>
    </AccountScreenWrapper>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
})

CarNumbers.propTypes = {
  navigation: PropTypes.object.isRequired,
}

CarNumbers.defaultProps = {}

export default CarNumbers
