import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, DARK_GRAY, PRIMARY_BLACK, OVERLAY, WHITE } from '@theme/colors'
import {
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  LINE_HEIGHT22,
  LINE_HEIGHT28,
} from '@theme/fonts'
import {
  DIM_H0,
  DIM_H6,
  DIM_V3,
  DIM_V4,
  DIM_V5,
  DIM_V7,
  HORIZONTAL_DIM,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  description: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    height: RH(5),
    width: RW(80),
  },
  handleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: DIM_V7,
  },
  modal: {
    paddingHorizontal: 0,
  },
  ratingForm: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
  reviewContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H6,
    borderTopRightRadius: DIM_H6,
    flexDirection: 'column',
    paddingVertical: DIM_V3,
  },
  title: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  titleContainer: {
    paddingBottom: DIM_V4,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V5,
  },
  totalCost: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE,
  },
  totalCostContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
    width: '100%',
  },
  totalLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
  },
  wrapper: {
    backgroundColor: OVERLAY,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
})

export default styles
