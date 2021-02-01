import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, ERROR, OVERLAY, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  FONT_SIZE_3XL,
  LINE_HEIGHT28,
  LINE_HEIGHT40,
} from '@theme/fonts'
import {
  DIM_H3,
  DIM_H5,
  DIM_H8,
  DIM_V3,
  DIM_V7,
  DIM_V9,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@root/constants'

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'column',
  },
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: DIM_H8,
    paddingVertical: DIM_V7,
  },
  description: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    textAlign: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: RH(80),
    paddingTop: RH(95),
  },
  expiredTime: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    marginLeft: DIM_H3,
  },
  extendError: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    textAlign: 'center',
  },
  icon: {
    height: RW(24),
    resizeMode: 'contain',
    width: RW(24),
  },
  timeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: DIM_V9,
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
    paddingVertical: DIM_V3,
    textAlign: 'center',
  },
  wrapper: {
    backgroundColor: OVERLAY,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
})

export default styles
