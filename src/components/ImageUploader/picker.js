import React, { useCallback, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import { Portal } from 'react-native-portalize'
import { Modalize } from 'react-native-modalize'

import I18nContext from '@root/i18n/I18nContext'

import { SCREEN_HEIGHT } from '@root/constants'

import styles from './styles'

const Picker = ({ onCaptureFromCamera, onPickFromStorage, onClose }) => {
  const { t } = useContext(I18nContext)
  const modalizeRef = useRef(null)

  const onCancel = useCallback(() => modalizeRef.current?.close(), [modalizeRef])

  return (
    <Portal>
      <View style={styles.wrapper}>
        <Modalize
          ref={modalizeRef}
          handlePosition="inside"
          modalStyle={styles.modal}
          handleStyle={styles.handle}
          alwaysOpen={SCREEN_HEIGHT}
          adjustToContentHeight
          overlayStyle={styles.modalOverlay}
          onClosed={onClose}
        >
          <View style={styles.pickerContainer}>
            <View style={styles.pickerButtonContaienr}>
              <TouchableOpacity
                style={styles.pickerButton}
                activeOpacity={0.5}
                onPress={onCaptureFromCamera}
              >
                <Text style={styles.pickerButtonText}>{t('common.takePhoto')}</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity
                style={styles.pickerButton}
                activeOpacity={0.5}
                onPress={onPickFromStorage}
              >
                <Text style={styles.pickerButtonText}>{t('common.fromGallery')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelButtonContainer}>
              <TouchableOpacity style={styles.pickerButton} activeOpacity={0.75} onPress={onCancel}>
                <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      </View>
    </Portal>
  )
}

Picker.propTypes = {
  onCaptureFromCamera: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onPickFromStorage: PropTypes.func.isRequired,
}

Picker.defaultProps = {}

export default Picker
