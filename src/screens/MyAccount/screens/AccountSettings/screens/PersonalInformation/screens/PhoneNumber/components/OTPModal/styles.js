import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, DARK_GRAY, DARK_SILVER, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_SM,
  FONT_SIZE_3XL,
  LINE_HEIGHT18,
  LINE_HEIGHT40,
} from '@theme/fonts'
import { DIM_H3, DIM_H5, DIM_V2, DIM_V3, DIM_V7, DIM_V13 } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: DIM_H3,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: DIM_V7,
    padding: DIM_H3,
  },
  closeIcon: {
    height: RW(26),
    width: RW(26),
  },
  codeContainer: {
    flexGrow: 1,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: DIM_H3,
    paddingVertical: DIM_V7,
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
    marginTop: RH(100),
  },
  label: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
    textAlign: 'center',
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: DIM_V13,
    paddingTop: DIM_V3,
    width: '50%',
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
    marginTop: DIM_V2,
    width: '100%',
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
    marginLeft: DIM_H5,
  },
})

export default styles
