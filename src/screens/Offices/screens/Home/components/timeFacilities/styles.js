import { StyleSheet } from 'react-native'
import { RH, RW } from '@theme/utils'

import { BLACK, PRIMARY_BLACK, SECONDARY, WHITE, YELLOW } from '@theme/colors'
import {
  DIM_H0,
  DIM_H3,
  DIM_H4,
  DIM_H5,
  DIM_V2,
  DIM_V3,
  DIM_V4,
  DIM_V6,
  DIM_V7,
  SCREEN_HEIGHT,
} from '@root/constants'
import { FONT_SF_PRO_REGULAR, FONT_SF_PRO_MEDIUM, FONT_SIZE, LINE_HEIGHT20 } from '@theme/fonts'

import { WHEEL_SCROLL_ITEM_HEIGHT, WHEEL_SCROLL_WRAPPER_HEIGHT } from '@components/DatePicker/utils'

const TITLE_HEIGHT = RH(26)
const BUTTONS_CONTAINER_HEIGHT = RH(75)
export const HANDLER_OFFSET = RH(50)
const MODAL_B_PADDDING = DIM_V3
const MODAL_T_PADDDING = DIM_V7
const MODAL_HEIGHT = SCREEN_HEIGHT - HANDLER_OFFSET
const MODAL_BODY_HEIGHT = MODAL_HEIGHT - (MODAL_B_PADDDING + MODAL_T_PADDDING)
const INNER_SCROLLVIEW_HEIGHT =
  MODAL_BODY_HEIGHT -
  (WHEEL_SCROLL_WRAPPER_HEIGHT + WHEEL_SCROLL_ITEM_HEIGHT) -
  TITLE_HEIGHT -
  BUTTONS_CONTAINER_HEIGHT -
  RH(15)

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: BUTTONS_CONTAINER_HEIGHT,
    justifyContent: 'space-between',
    paddingHorizontal: DIM_H5,
    width: '100%',
  },
  clearButtonContainer: {
    flex: 2,
  },
  clearIcon: {
    height: 22,
    resizeMode: 'contain',
    width: 22,
  },
  clearTimeFacilitiesContainer: {
    alignItems: 'center',
    borderLeftColor: SECONDARY,
    borderLeftWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: DIM_H4,
    paddingVertical: DIM_V4,
  },
  col: {
    flexDirection: 'column',
    width: '100%',
  },
  confirmButtonContainer: {
    flex: 3,
  },
  container: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: DIM_H3,
    width: '100%',
  },
  dropdownIcon: {
    height: 24,
    resizeMode: 'contain',
    width: 24,
  },
  filterContainer: {
    flexDirection: 'column',
    height: MODAL_HEIGHT,
    paddingBottom: MODAL_B_PADDDING,
    paddingTop: MODAL_T_PADDDING,
  },
  filterInnerScrollView: {
    borderTopColor: SECONDARY,
    borderTopWidth: 1,
    height: INNER_SCROLLVIEW_HEIGHT,
    width: '100%',
  },
  filterModal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    width: RW(80),
  },
  row: {
    borderTopColor: SECONDARY,
    borderTopWidth: 1,
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V6,
    width: '100%',
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
  timeFacilities: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
  },
  timeFacilitiesActive: {
    color: YELLOW,
  },
  timeFacilityButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: DIM_H3,
    paddingVertical: DIM_V2,
  },
  timeFacilityButtonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    height: TITLE_HEIGHT,
    lineHeight: LINE_HEIGHT20,
  },
})

export default styles
