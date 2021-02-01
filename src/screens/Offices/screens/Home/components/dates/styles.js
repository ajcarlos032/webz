import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { BLACK, SECONDARY, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT18,
} from '@theme/fonts'
import { DIM_H2, DIM_V0, DIM_V2, SCREEN_WIDTH } from '@root/constants'

const DATE_ITEM_DIM_SM = SCREEN_WIDTH / 6

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: RH(65),
    width: '100%',
  },
  dateItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dateItemContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    minWidth: DATE_ITEM_DIM_SM,
    paddingHorizontal: DIM_H2,
    paddingVertical: DIM_V2,
  },
  dateLabel: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
    paddingBottom: DIM_V0,
  },
  dateSelected: {
    color: YELLOW,
    fontFamily: FONT_SF_PRO_BOLD,
  },
  dateSelectedContainer: {
    borderBottomColor: YELLOW,
    borderTopColor: YELLOW,
  },
  dateValue: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT18,
    paddingTop: DIM_V0,
  },
  icon: {
    height: RW(22),
    resizeMode: 'contain',
    width: RW(22),
  },
  listContainer: {
    height: '100%',
  },
  pickerButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
})

export default styles
