import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { ReactNativeFile } from 'apollo-upload-client'
import * as mime from 'react-native-mime-types'

import Picker from './picker'

import { captureFromCamera, onHandlePhotos, pickFromStorage } from './utils'

const ImageUploader = ({ children, disabled, onLoaded, style }) => {
  const [showPicker, setShowPicker] = useState(false)

  const onShowPicker = useCallback(() => onHandlePhotos(setShowPicker), [setShowPicker])

  const upload = useCallback(
    (file) => {
      onLoaded(
        new ReactNativeFile({
          name: `photo-${new Date().getTime()}`,
          type: mime.lookup(file.uri) || file.type || 'image',
          uri: file.uri,
        }),
      )
    },
    [onLoaded],
  )

  const onCaptureFromCamera = useCallback(() => {
    setShowPicker(false)
    captureFromCamera()
      .then((file) => {
        if (file.uri) upload(file)
      })
      .catch((e) => {
        console.log({ e })
      })
  }, [upload])

  const onPickFromStorage = useCallback(() => {
    setShowPicker(false)
    pickFromStorage()
      .then((file) => {
        if (file.uri) upload(file)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [upload])

  return (
    <>
      <TouchableOpacity disabled={disabled} style={style} onPress={onShowPicker}>
        {children}
      </TouchableOpacity>
      {showPicker && (
        <Picker
          onCaptureFromCamera={onCaptureFromCamera}
          onPickFromStorage={onPickFromStorage}
          onClose={() => setShowPicker(false)}
        />
      )}
    </>
  )
}

ImageUploader.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onLoaded: PropTypes.func,
  style: PropTypes.object,
}

ImageUploader.defaultProps = {
  disabled: false,
  onLoaded: () => null,
  style: {},
}

export default ImageUploader
