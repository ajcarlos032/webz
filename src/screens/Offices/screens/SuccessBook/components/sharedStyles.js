import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, PRIMARY_BLACK, SECONDARY, SILVER } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  LINE_HEIGHT18,
  LINE_HEIGHT22,
} from '@theme/fonts'
import {
  DIM_H1,
  DIM_H2,
  DIM_H4,
  DIM_H7,
  DIM_V2,
  DIM_V3,
  DIM_V4,
  DIM_V6,
  DIM_V7,
  DIM_V9,
  HORIZONTAL_DIM,
} from '@root/constants'

export const addCalendarStyles = StyleSheet.create({
  buttonText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
  },
  calendarButton: {
    paddingLeft: DIM_H7,
  },
  calendarIcon: {
    height: DIM_H7,
    width: DIM_H7,
  },
  container: {
    alignItems: 'center',
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  label: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginLeft: DIM_H4,
  },
  labelContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
  },
})

export const shareBookingStyles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingBottom: DIM_V9,
    paddingHorizontal: DIM_H7,
    paddingTop: DIM_V7,
  },
  container: {
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V3,
    width: '100%',
  },
  helpText: {
    alignSelf: 'flex-end',
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    marginTop: DIM_V2,
  },
  label: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  rtlText: {
    alignSelf: 'flex-start',
  },
  shareButton: {
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    borderRadius: RW(18),
    flexDirection: 'row',
    height: RW(36),
    justifyContent: 'center',
    padding: RW(9),
    width: RW(36),
  },
  shareIcon: {
    height: '100%',
    width: '100%',
  },
  url: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    overflow: 'hidden',
    paddingLeft: DIM_H1,
  },
  urlContainer: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DIM_V6,
    paddingHorizontal: DIM_H4,
    paddingVertical: DIM_V4,
  },
})
