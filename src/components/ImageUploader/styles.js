import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { LIGHT_GRAY, OVERLAY, PRIMARY_BLACK, TRANSPARENT } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SF_PRO_REGULAR, FONT_SIZE_LG, LINE_HEIGHT25 } from '@theme/fonts'
import {
  DIM_H4,
  DIM_H5,
  DIM_V3,
  DIM_V6,
  DIM_V7,
  HORIZONTAL_DIM,
  SCREEN_WIDTH,
} from '@root/constants'

const styles = StyleSheet.create({
  cancelButtonContainer: {
    backgroundColor: '#f8f8f8eb',
    borderRadius: DIM_H4,
    marginTop: DIM_V3,
    overflow: 'hidden',
  },
  cancelButtonText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_LG,
    lineHeight: LINE_HEIGHT25,
    textAlign: 'center',
  },
  divider: {
    backgroundColor: LIGHT_GRAY,
    height: RH(1),
    width: '100%',
  },
  handle: {
    backgroundColor: TRANSPARENT,
  },
  modal: {
    backgroundColor: TRANSPARENT,
    elevation: 0,
    paddingHorizontal: HORIZONTAL_DIM,
    shadowColor: TRANSPARENT,
    shadowOpacity: 0,
  },
  modalOverlay: {
    backgroundColor: TRANSPARENT,
  },
  pickerButton: {
    paddingVertical: DIM_V6,
  },
  pickerButtonContaienr: {
    backgroundColor: '#f8f8f8eb',
    borderRadius: DIM_H5,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pickerButtonText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_LG,
    lineHeight: LINE_HEIGHT25,
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'column',
    paddingBottom: DIM_V7,
  },
  wrapper: {
    backgroundColor: OVERLAY,
    height: '100%',
    width: SCREEN_WIDTH,
  },
})

export default styles
