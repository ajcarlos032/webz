import React, { useContext } from 'react'
import { Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import TimeLinePicker from './timeLinePicker'
import Stepper from './stepper'

import sharedStyles from '../sharedStyles'
import styles from './styles'

const BookingTime = () => {
  const { t } = useContext(I18nContext)

  return (
    <View style={[sharedStyles.container, styles.container]}>
      <View style={[sharedStyles.labelContainer, styles.labelContainer]}>
        <Text style={sharedStyles.label}>{t('home.time')}</Text>
      </View>
      <TimeLinePicker />
      <Stepper />
    </View>
  )
}

BookingTime.propTypes = {}

BookingTime.defaultProps = {}

export default BookingTime
