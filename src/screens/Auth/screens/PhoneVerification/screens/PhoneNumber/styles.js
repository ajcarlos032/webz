import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { BLACK, DARK_SILVER, ERROR } from '@theme/colors'
import {
  FONT_SF_PRO_REGULAR,
  FONT_ROBOTO_MEDIUM,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  LINE_HEIGHT18,
} from '@theme/fonts'
import { DIM_H4, DIM_V2, DIM_V4, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  error: {
    color: ERROR,
  },
  formButtonContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V2,
  },
  formRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    textAlign: 'left',
  },
  infoContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
  message: {
    color: ERROR,
    fontFamily: FONT_ROBOTO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginTop: DIM_V4,
    textAlign: 'center',
  },
  phoneNumber: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XL,
    minWidth: RW(125),
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  phoneNumberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: DIM_H4,
  },
  vDivider: {
    backgroundColor: '#E5E5EA',
    height: '100%',
    width: 1,
  },
})

export default styles
