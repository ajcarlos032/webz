/* eslint-disable sort-keys */
import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import {
  BLACK,
  DARK_BLUE,
  DARK_GRAY,
  DARK_SILVER,
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
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT18,
  LINE_HEIGHT28,
  FONT_SF_PRO_SEMIBOLD,
} from '@theme/fonts'
import { DIM_H1, DIM_H6, DIM_H7, DIM_V3, DIM_V5, DIM_V10, DIM_V13 } from '@root/constants'

export const getCalendarTheme = (isRTL) => ({
  dayTextColor: BLACK,
  indicatorColor: 'green',
  monthTextColor: DARK_BLUE,
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  selectedDotColor: '#ffffff',
  textDayFontFamily: FONT_SF_PRO_MEDIUM,
  textDayFontSize: FONT_SIZE,
  textDayFontWeight: '500',
  textDayHeaderFontFamily: FONT_SF_PRO_MEDIUM,
  textDayHeaderFontSize: FONT_SIZE,
  textDayHeaderFontWeight: '600',
  textDisabledColor: DARK_SILVER,
  textMonthFontFamily: FONT_SF_PRO_SEMIBOLD,
  textMonthFontSize: FONT_SIZE_MD,
  textMonthFontWeight: 'bold',
  textSectionTitleColor: DARK_SILVER,
  textSectionTitleDisabledColor: DARK_SILVER,
  todayTextColor: YELLOW,
  'stylesheet.calendar.header': {
    week: {
      display: 'none',
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      marginHorizontal: RW(10),
      marginTop: RH(10),
    },
  },
  'stylesheet.calendar.main': {
    week: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      marginTop: RH(7),
      marginBottom: RH(7),
      justifyContent: 'space-around',
      paddingLeft: RW(5),
      paddingRight: RW(5),
    },
  },
  'stylesheet.calendar-list.main': {
    calendar: {
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
    },
  },
})

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: DIM_H1,
    paddingTop: DIM_V10,
  },
  calendar: {
    height: undefined,
  },
  calendarText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_LG,
  },
  closeButton: {
    alignSelf: 'flex-start',
    paddingBottom: DIM_V5,
    paddingHorizontal: DIM_H6,
    paddingTop: DIM_V13,
  },
  closeIcon: {
    height: RW(20),
    tintColor: BLACK,
    width: RW(20),
  },
  container: {
    backgroundColor: WHITE,
    height: '100%',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  dayOfWeekText: {
    color: DARK_GRAY,
    flex: 1,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
    paddingVertical: DIM_V3,
    textAlign: 'center',
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
  pickerButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RW(16),
    height: RW(32),
    justifyContent: 'center',
    width: RW(32),
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  rtlWrapper: {
    flexDirection: 'row-reverse',
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
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V3,
  },
  weekDayWrapper: {
    alignItems: 'center',
    borderBottomColor: SILVER,
    borderBottomWidth: RH(1),
    borderTopColor: TRANSPARENT,
    borderTopWidth: 0,
    flexDirection: 'row',
    paddingHorizontal: RW(5),
    width: '100%',
  },
})

export default styles
