import { StyleSheet } from 'react-native'
import { RH, RW } from '@theme/utils'

import { SHADOW, WHITE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE } from '@theme/fonts'

export const ACTION_BG_DIM = RW(175)
export const ACTION_BUTTON_OFFSET_X = RW(10)
export const ACTION_BUTTON_OFFSET_Y = RW(85)
export const MENU_BUTTON_DIM = RW(55)
export const MENU_ITEM_DIM = RW(40)
export const BUTTON_O = [
  ACTION_BUTTON_OFFSET_X + (MENU_BUTTON_DIM + MENU_ITEM_DIM) / 2,
  ACTION_BUTTON_OFFSET_Y + (MENU_BUTTON_DIM - MENU_ITEM_DIM) / 2,
]

const styles = StyleSheet.create({
  actionBgStyle: {
    backgroundColor: '#FBDC8E35',
    borderRadius: ACTION_BG_DIM / 2,
    bottom: ACTION_BUTTON_OFFSET_Y - ACTION_BG_DIM / 2 + MENU_BUTTON_DIM / 2,
    height: ACTION_BG_DIM,
    position: 'absolute',
    width: ACTION_BG_DIM,
    zIndex: 1,
  },
  actionLeftBg: {
    right: -(ACTION_BG_DIM / 2 - MENU_BUTTON_DIM / 2 - ACTION_BUTTON_OFFSET_X),
  },
  actionRightBg: {
    left: -(ACTION_BG_DIM / 2 - MENU_BUTTON_DIM / 2 - ACTION_BUTTON_OFFSET_X),
  },
  dropShadow: {
    elevation: 15,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  menuItemIcon: {
    height: RW(20),
    width: RW(20),
  },
  menuOpenButton: {
    borderWidth: 1,
    paddingBottom: RH(85),
    paddingRight: RW(10),
  },
  menuOpenIcon: {
    height: RW(24),
    resizeMode: 'contain',
    tintColor: WHITE,
    width: RW(24),
  },
  title: {
    color: WHITE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    paddingHorizontal: RW(5),
    position: 'absolute',
    right: MENU_ITEM_DIM,
  },
})

export default styles
