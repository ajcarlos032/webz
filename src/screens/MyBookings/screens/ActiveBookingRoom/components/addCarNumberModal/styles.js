import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import {
  BLACK,
  DARK_GRAY,
  PRIMARY_BLACK,
  SECONDARY,
  SILVER,
  TRANSPARENT,
  WHITE,
  YELLOW,
} from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_BOLD,
  FONT_SIZE,
  FONT_SIZE_LG,
  FONT_SIZE_XL,
  LINE_HEIGHT18,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_H1, DIM_H7, DIM_V3, DIM_V5, DIM_V10, DIM_V11 } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: DIM_H1,
    paddingTop: DIM_V10,
  },
  calendarText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_LG,
  },
  closeButton: {
    alignSelf: 'flex-start',
    paddingBottom: DIM_V5,
    paddingHorizontal: DIM_H7,
    paddingTop: DIM_V11,
  },
  closeIcon: {
    height: RW(20),
    tintColor: BLACK,
    width: RW(20),
  },
  container: {
    backgroundColor: WHITE,
    flexDirection: 'column',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  dayOfWeekText: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
  },
  footer: {
    flexDirection: 'column',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V3,
  },
  icon: {
    height: RW(24),
    width: RW(24),
  },
  modal: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  pickerButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RW(16),
    height: RW(32),
    justifyContent: 'center',
    width: RW(32),
  },
  selectedEdgeDay: {
    backgroundColor: YELLOW,
  },
  selectedRange: {
    backgroundColor: YELLOW,
  },
  title: {
    alignSelf: 'flex-start',
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V3,
  },
  weekDayWrapper: {
    borderBottomColor: SILVER,
    borderBottomWidth: RH(1),
    borderTopColor: TRANSPARENT,
    borderTopWidth: 0,
  },
})

export default styles
