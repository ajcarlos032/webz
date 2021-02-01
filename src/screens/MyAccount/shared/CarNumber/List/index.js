import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import UserActions from '@store/User/Actions'

import I18nContext from '@root/i18n/I18nContext'

import CarNumber from './carNumber'

import styles from './styles'

const carIcon = require('@assets/icons/ic_img_car.png')

const CarNumbers = ({ carNumbers, onSelect, canRemove }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)

  const onRemove = useCallback(
    (id) => {
      dispatch(UserActions.deleteCarNumber(id))
    },
    [dispatch],
  )

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {Boolean(carNumbers?.length) ? (
        <View style={styles.carNumbers}>
          {carNumbers.map((carNumber, index) => (
            <CarNumber
              key={index}
              canRemove={canRemove}
              carNumber={carNumber}
              onSelect={onSelect}
              onRemove={onRemove}
            />
          ))}
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={carIcon} style={styles.icon} />
          <Text style={styles.noNumberDescription}>{t('account.noCarNumberDesc')}</Text>
        </View>
      )}
    </ScrollView>
  )
}

CarNumbers.propTypes = {
  canRemove: PropTypes.bool,
  carNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      default: PropTypes.bool,
      id: PropTypes.string,
      label: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onSelect: PropTypes.func,
}

CarNumbers.defaultProps = {
  canRemove: false,
  carNumbers: [],
  onSelect: () => null,
}

export default CarNumbers
