import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'

import { WHITE } from '@theme/colors'
import { DIM_H0, DIM_H3, DIM_H5, DIM_V4, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  closeButton: {
    marginBottom: DIM_V7,
    padding: DIM_H3,
  },
  closeIcon: {
    height: RW(26),
    width: RW(26),
  },
  footer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V4,
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    width: RW(80),
  },
  modal: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: '100%',
  },
  modalBody: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
  },
})

export default styles
