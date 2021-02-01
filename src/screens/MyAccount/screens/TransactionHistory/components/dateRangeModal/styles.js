import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_SILVER, PRIMARY_BLACK, SECONDARY, TRANSPARENT, WHITE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SF_PRO_REGULAR, FONT_SIZE, LINE_HEIGHT18 } from '@theme/fonts'
import { DIM_H1, DIM_H3, DIM_H5, DIM_V7, DIM_V10 } from '@root/constants'

export const CONTAINER_PADDING = DIM_H3

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: DIM_H1,
    paddingTop: DIM_V10,
  },
  calendarText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
  },
  closeButton: {
    marginBottom: DIM_V7,
    padding: DIM_H3,
  },
  closeIcon: {
    height: RW(26),
    width: RW(26),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dayOfWeekText: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
  },
  icon: {
    height: RW(24),
    width: RW(24),
  },
  pickerButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RW(16),
    height: RW(32),
    justifyContent: 'center',
    width: RW(32),
  },
  pickerContainer: {
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    padding: CONTAINER_PADDING,
    width: '100%',
  },
  selectedEdgeDay: {
    backgroundColor: YELLOW,
  },
  selectedRange: {
    backgroundColor: YELLOW,
  },
  weekDayWrapper: {
    borderColor: TRANSPARENT,
    borderWidth: 0,
  },
})

export default styles
