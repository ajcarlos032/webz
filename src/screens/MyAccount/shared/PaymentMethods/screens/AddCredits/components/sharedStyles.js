import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import {
  DARK_BLUE,
  DARK_SILVER,
  PRIMARY_BLACK,
  SECONDARY,
  SHADOW,
  SILVER,
  YELLOW,
  WHITE,
} from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_ROBOTO_BOLD,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_3XL,
  LINE_HEIGHT22,
  LINE_HEIGHT35,
} from '@theme/fonts'
import {
  DIM_H0,
  DIM_H1,
  DIM_H2,
  DIM_H5,
  DIM_H7,
  DIM_H8,
  DIM_V1,
  DIM_V3,
  DIM_V4,
  DIM_V5,
  DIM_V7,
  DIM_V9,
  HORIZONTAL_DIM,
} from '@root/constants'

export const paymentCardStyles = StyleSheet.create({
  button: {
    borderColor: YELLOW,
    borderRadius: RW(11),
    borderWidth: RW(1),
    height: RW(22),
    width: RW(22),
  },
  buttonContainer: {
    padding: DIM_H1,
  },
  cardDetail: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT35,
  },
  container: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DIM_V7,
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V5,
  },
  selected: {
    borderWidth: RW(4),
  },
})

export const selectCreditsStyles = StyleSheet.create({
  container: {
    paddingVertical: DIM_V3,
  },
  cost: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  credit: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT35,
  },
  creditDetailContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creditItem: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    flexDirection: 'row',
    paddingLeft: DIM_H8,
    paddingVertical: DIM_V4,
  },
  dropDown: {
    backgroundColor: WHITE,
    borderRadius: DIM_V4,
  },
  dropDownContainer: {
    marginHorizontal: HORIZONTAL_DIM,
  },
  dropDownIcon: {
    height: RW(8),
    width: RW(14),
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: DIM_V5,
    width: RW(50),
  },
  selectButtonContainer: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  shadow: {
    elevation: 10,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

export const customCreditStyles = StyleSheet.create({
  container: {
    paddingVertical: DIM_V3,
  },
  cost: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_LG,
    paddingLeft: DIM_H0,
    textAlign: 'right',
  },
  divider: {
    backgroundColor: DARK_SILVER,
    height: '50%',
    width: 2,
  },
  field: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V1,
  },
  rtlInput: {
    textAlign: 'right',
  },
  textInput: {
    alignItems: 'center',
    color: DARK_BLUE,
    flex: 2,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
    paddingRight: DIM_H0,
  },
})

export const successModalStyles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: DIM_V3,
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    marginTop: DIM_V9,
    textAlign: 'center',
  },
  modal: {
    paddingVertical: RH(75),
  },
  modalContainer: {
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
  },
  successIcon: {
    height: RH(85),
    resizeMode: 'contain',
    width: RH(85),
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    textAlign: 'center',
  },
})
