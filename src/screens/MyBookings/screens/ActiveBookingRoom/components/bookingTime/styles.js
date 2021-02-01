import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { BACKGROUND, DARK_GRAY, ERROR, SUCCESS, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_XL,
  FONT_SIZE_3XL,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_V2, DIM_V7, DIM_V9, HORIZONTAL_DIM } from '@root/constants'

export const CHART_SIZE = RW(240)

export const styles = StyleSheet.create({
  active: {
    color: SUCCESS,
    opacity: 0.75,
  },
  chartContainer: {
    paddingVertical: DIM_V9,
  },
  container: {
    backgroundColor: BACKGROUND,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V7,
  },
  ending: {
    color: ERROR,
    opacity: 0.75,
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    height: CHART_SIZE,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  pending: {
    color: YELLOW,
    opacity: 0.75,
  },
  stateLabel: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_XL,
    marginTop: DIM_V2,
  },
  timeLeftLabel: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_3XL,
    textAlign: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
})
