import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, DARK_GRAY, SECONDARY, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_3XL,
  LINE_HEIGHT22,
  LINE_HEIGHT40,
} from '@theme/fonts'
import {
  DIM_H2,
  DIM_H3,
  DIM_H4,
  DIM_H10,
  DIM_V5,
  DIM_V7,
  DIM_V10,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  addFundButton: {
    backgroundColor: YELLOW,
    borderRadius: DIM_H10 / 2,
    height: DIM_H10,
    padding: DIM_H2,
    width: DIM_H10,
  },
  addIcon: {
    height: '100%',
    width: '100%',
  },
  balance: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
  },
  balanceContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: DIM_V7,
    paddingTop: DIM_V5,
    width: '100%',
  },
  balanceInfoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  balanceLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginLeft: DIM_H3,
  },
  balanceRow: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    backgroundColor: SECONDARY,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    flexDirection: 'column',
    paddingBottom: DIM_V10,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V7,
    width: '100%',
  },
  credit: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginLeft: DIM_H3,
  },
  detail: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
    width: '75%',
  },
  labelRow: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  walletIcon: {
    height: RW(20),
    width: RH(20),
  },
})

export default styles
