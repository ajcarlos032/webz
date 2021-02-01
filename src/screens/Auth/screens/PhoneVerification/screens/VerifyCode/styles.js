import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { BLACK, DARK_SILVER, DARK_BLUE, SILVER } from '@theme/colors'
import {
  FONT_ROBOTO_BOLD,
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  LINE_HEIGHT18,
} from '@theme/fonts'
import { DIM_H2, DIM_H4, DIM_H5, DIM_V2, DIM_V4, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    height: RW(60),
    justifyContent: 'center',
    width: RW(60),
  },
  cellText: {
    color: BLACK,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_XL,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlign: 'center',
    width: '100%',
  },
  formButtonContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V2,
  },
  info: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  message: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    textAlign: 'center',
  },
  messageRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: DIM_V4,
  },
  phoneNumber: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_SM,
    marginLeft: DIM_H5,
  },
  time: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    marginLeft: DIM_H4,
  },
})

export default styles
