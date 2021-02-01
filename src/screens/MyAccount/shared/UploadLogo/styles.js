import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, GRAY, LIGHT_GRAY } from '@theme/colors'
import {
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SF_PRO_MEDIUM,
  LINE_HEIGHT18,
  LINE_HEIGHT22,
} from '@theme/fonts'
import {
  DIM_H5,
  DIM_H7,
  DIM_V3,
  DIM_V5,
  DIM_V7,
  DIM_V8,
  DIM_V9,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
  },
  helper: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    textAlign: 'center',
  },
  info: {
    alignSelf: 'flex-end',
    color: GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginTop: DIM_V5,
  },
  rtlText: {
    alignSelf: 'flex-start',
  },
  title: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  upload: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'center',
  },
  uploadButton: {
    paddingBottom: DIM_V8,
    paddingTop: DIM_V9,
    width: '100%',
  },
  uploading: {
    color: GRAY,
  },
  uploadZone: {
    borderColor: LIGHT_GRAY,
    borderRadius: DIM_H5,
    borderStyle: 'dashed',
    borderWidth: RH(1),
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V8,
    paddingHorizontal: DIM_H7,
    paddingTop: DIM_V7,
  },
})

export default styles
