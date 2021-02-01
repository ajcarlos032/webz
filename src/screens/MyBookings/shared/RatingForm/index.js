import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import Rating from '@components/Rating'
import TextArea from '@components/form/TextArea'

import { RW } from '@theme/utils'

import styles from './styles'

const RatingForm = ({ rating, review, buttonText, onSave, containerStyle }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const [rate, setRate] = useState(rating)
  const [description, setDescription] = useState(review)

  const _onSave = useCallback(() => {
    onSave({ description, rate })
  }, [description, onSave, rate])

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.row, styles.ratingContainer]}>
        <Text style={styles.label}>{t('bookings.pleaseRate')}</Text>
        <Rating
          rating={rate}
          size={RW(69)}
          isRTL={isRTL}
          containerStyle={styles.ratingWrapper}
          onRate={setRate}
        />
      </View>
      <View style={[styles.row, styles.reviewTextContainer]}>
        <Text style={styles.label}>{t('bookings.writeReview')}</Text>
        <TextArea
          value={description}
          onChange={setDescription}
          placeholder={t('bookings.textHere')}
          containerStyle={styles.reviewText}
          isRTL={isRTL}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text={buttonText} onPress={_onSave} />
      </View>
    </View>
  )
}

RatingForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  rating: PropTypes.number,
  review: PropTypes.string,
}

RatingForm.defaultProps = {
  containerStyle: {},
  rating: 5,
  review: null,
}

export default RatingForm
