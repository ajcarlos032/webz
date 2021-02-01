import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import BookingActions from '@store/Booking/Actions'
import { bookingSelector } from '@store/Booking/Select'
import I18nContext from '@root/i18n/I18nContext'

import ImageUploader from '@components/ImageUploader'

import styles from './styles'

const UploadLogo = ({ isRTL, onUploaded }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { uploadLogosLoading } = useSelector(bookingSelector)

  const onUpload = useCallback(
    (file) => {
      dispatch(BookingActions.uploadLogos({ logos: [file] }, onUploaded))
    },
    [onUploaded, dispatch],
  )

  return (
    <View style={styles.container}>
      <View style={styles.uploadZone}>
        <Text style={styles.title}>{t('bookings.uploadLogo')}</Text>
        <ImageUploader
          style={styles.uploadButton}
          disabled={uploadLogosLoading}
          onLoaded={onUpload}
        >
          <Text style={[styles.upload, uploadLogosLoading && styles.uploading]}>
            {uploadLogosLoading ? t('bookings.uploading') : t('bookings.upload')}
          </Text>
        </ImageUploader>
        <Text style={styles.helper}>{`${t('bookings.max')} 3mb / .png .jpg`}</Text>
      </View>
      <Text style={[styles.info, isRTL && styles.rtlText]}>Some information</Text>
    </View>
  )
}

UploadLogo.propTypes = {
  isRTL: PropTypes.bool,
  onUploaded: PropTypes.func,
}

UploadLogo.defaultProps = {
  isRTL: false,
  onUploaded: () => null,
}

export default UploadLogo
