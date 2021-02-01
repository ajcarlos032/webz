import { PermissionsAndroid } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import { IS_IOS } from '@root/constants'

export const onHandlePhotos = (cb) => {
  if (IS_IOS) {
    if (cb) cb(true)
    return
  }

  PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]).then((granted) => {
    const isGranted =
      granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED

    if (cb) cb(isGranted)
  })
}

export const captureFromCamera = () => {
  const pickerOptions = {
    mediaType: 'photo',
    quality: 1,
    saveToPhotos: true,
  }
  return new Promise((resolve, reject) => {
    return launchCamera(pickerOptions, (res) => {
      const file = { name: null, type: null, uri: null }
      if (res.didCancel) {
        reject(new Error('canceled'))
      } else if (!res.error && !res.customButton) {
        file.type = res.type
        file.uri = res.uri
      }
      resolve(file)
    })
  })
}

export const pickFromStorage = () => {
  const pickerOptions = {
    mediaType: 'photo',
    quality: 1,
  }
  return new Promise((resolve, reject) => {
    return launchImageLibrary(pickerOptions, (res) => {
      const file = { type: null, uri: null }
      if (res.didCancel) {
        reject(new Error('canceled'))
      } else if (!res.error && !res.customButton) {
        file.type = res.type
        file.uri = res.uri
      }
      resolve(file)
    })
  })
}
