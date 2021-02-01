import React, { useContext, useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Portal } from 'react-native-portalize'
import { Modalize } from 'react-native-modalize'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import User from '@screens/MyAccount/shared/User'
import Rating from '@components/Rating'

import { useCombinedRefs } from '@helpers/useCombinedRefs'
import { RW } from '@theme/utils'

import styles from './styles'

const ReviewModal = forwardRef(({ review }, ref) => {
  const { t } = useContext(I18nContext)
  const modalizeRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, modalizeRef)

  const { isRTL } = useSelector(configSelector)

  return (
    <Portal>
      <Modalize
        ref={combinedRef}
        modalStyle={styles.reviewModal}
        adjustToContentHeight
        childrenStyle={styles.reviewContainer}
        handleStyle={styles.handle}
        closeOnOverlayTap={false}
      >
        <View style={styles.row}>
          <User avatar={review?.member_avatar_url} name={review?.member_name} />
        </View>

        <View style={[styles.row, styles.ratingContainer]}>
          <Text style={styles.title}>{t('home.rate')}</Text>
          <Rating
            rating={review?.rate}
            readOnly
            isRTL={isRTL}
            size={RW(50)}
            containerStyle={styles.ratingWrapper}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>{t('home.reviewText')}</Text>
          {!!review?.description && <Text style={styles.reviewText}>{review?.description}</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={t('common.close')} onPress={() => combinedRef.current?.close()} />
        </View>
      </Modalize>
    </Portal>
  )
})

ReviewModal.propTypes = {
  review: PropTypes.shape({
    description: PropTypes.string,
    member_avatar_url: PropTypes.string,
    member_name: PropTypes.string,
    rate: PropTypes.number,
  }),
}

ReviewModal.defaultProps = {
  review: {},
}

export default ReviewModal
