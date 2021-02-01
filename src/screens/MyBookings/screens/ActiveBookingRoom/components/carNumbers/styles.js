import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, OVERLAY, PRIMARY_BLACK, WHITE } from '@theme/colors'
import {
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_BOLD,
  LINE_HEIGHT22,
  LINE_HEIGHT28,
} from '@theme/fonts'
import {
  DIM_H0,
  DIM_H5,
  DIM_V1,
  DIM_V3,
  DIM_V7,
  DIM_V9,
  DIM_V11,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  addNewNumber: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  addNewNumberButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: DIM_V7,
    paddingVertical: DIM_V3,
    width: '100%',
  },
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  container: {
    flex: 1,
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    top: -DIM_V1,
    width: RW(80),
  },
  hidden: {
    display: 'none',
  },
  hiddenOverlay: {
    height: 0,
    top: -10,
  },
  modal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
  },
  noNumTitle: {
    paddingBottom: DIM_V11,
  },
  overlay: {
    backgroundColor: OVERLAY,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  row: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  title: {
    alignSelf: 'flex-start',
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingBottom: DIM_V3,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V9,
  },
})

export default styles
