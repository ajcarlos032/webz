import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { YELLOW } from '@theme/colors'
import { DIM_H1, DIM_H5, DIM_V0, DIM_V5, DIM_V6 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageItem: {
    paddingHorizontal: DIM_H1,
  },
  imagesContainer: {
    flex: 1,
  },
  imageSlider: {
    bottom: DIM_V6,
    minWidth: '100%',
    position: 'absolute',
  },
  officeImage: {
    minHeight: '100%',
    minWidth: '100%',
  },
  officeImageItem: {
    height: RH(95),
    resizeMode: 'cover',
    width: RW(102),
  },
  panoramaButton: {
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V5,
    position: 'absolute',
    right: 0,
    top: DIM_V0,
    zIndex: 1,
  },
  panoramaIcon: {
    height: RH(30),
    resizeMode: 'contain',
    width: RW(41),
  },
  selectedImage: {
    borderColor: YELLOW,
    borderWidth: RW(1),
  },
})

export default styles
