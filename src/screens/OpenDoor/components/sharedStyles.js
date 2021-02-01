import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import {
  DARK_BLUE,
  DARK_SILVER,
  PRIMARY_BLACK,
  SECONDARY,
  TRANSPARENT,
  YELLOW,
} from '@theme/colors'
import {
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
  LINE_HEIGHT28,
} from '@theme/fonts'
import {
  DIM_H3,
  DIM_H6,
  DIM_V2,
  DIM_V5,
  DIM_V7,
  DIM_V9,
  DIM_V11,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  background: {
    alignItems: 'flex-start',
    backgroundColor: TRANSPARENT,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    paddingVertical: DIM_V11,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  bookings: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: DIM_V2,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: SECONDARY,
  },
  disabledText: {
    color: DARK_SILVER,
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  itemBody: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V7,
  },
  itemContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  lobbyDoorContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  lockIcon: {
    height: RW(70),
    resizeMode: 'contain',
    width: RW(70),
  },
  noOfficesBooked: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingBottom: DIM_V9,
    textAlign: 'center',
    width: '100%',
  },
  officeDoorContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  roomName: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V5,
  },
  unlockButton: {
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: DIM_H3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: DIM_V7,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  unlockButtonText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
    paddingHorizontal: DIM_V2,
  },
  unlockIcon: {
    height: RW(24),
    paddingHorizontal: DIM_V2,
    resizeMode: 'contain',
    tintColor: DARK_BLUE,
    width: RW(24),
  },
})

export default styles
