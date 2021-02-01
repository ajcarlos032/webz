import { StyleSheet } from 'react-native'

import {
  DARK_BLUE,
  DARK_SILVER,
  PRIMARY_BLACK,
  SECONDARY,
  YELLOW,
  TRANSPARENT,
} from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_H3, DIM_V2, DIM_V5 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: DIM_V2,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: SECONDARY,
  },
  disabledText: {
    color: DARK_SILVER,
  },
  primaryButton: {
    backgroundColor: YELLOW,
    borderRadius: DIM_H3,
    flex: 1,
    paddingVertical: DIM_V5,
  },
  primaryButtonText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'center',
  },
  pureButton: {
    backgroundColor: TRANSPARENT,
    borderRadius: DIM_H3,
    flex: 1,
    paddingVertical: DIM_V5,
  },
  pureButtonText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: TRANSPARENT,
    borderColor: YELLOW,
    borderRadius: DIM_H3,
    borderWidth: 1,
    flex: 1,
    paddingVertical: DIM_V5,
  },
  secondaryButtonText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'center',
  },
})

export default styles
