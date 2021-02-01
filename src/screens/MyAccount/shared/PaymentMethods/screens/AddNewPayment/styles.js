import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, ERROR, GRAY, SECONDARY, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_MEDIUM,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT20,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_H4, DIM_H5, DIM_V3, DIM_V7, DIM_V8, DIM_V9, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: WHITE,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  cardInfoContainer: {
    flexDirection: 'column',
    paddingBottom: DIM_V8,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V7,
  },
  cardInfoFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumber: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    letterSpacing: 1,
    lineHeight: LINE_HEIGHT28,
    marginVertical: DIM_V9,
  },
  cardNumberContainer: {
    paddingVertical: DIM_V9,
    width: '100%',
  },
  cardNumberPlaceholder: {
    color: GRAY,
  },
  container: {
    backgroundColor: SECONDARY,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
  },
  error: {
    color: ERROR,
  },
  errorRow: {
    borderBottomColor: ERROR,
  },
  formContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: DIM_V9,
  },
  holderDate: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  inputField: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    textAlign: 'right',
  },
  inputFieldContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V3,
  },
  inputFieldRow: {
    alignItems: 'center',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: RH(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
  row: {
    flexDirection: 'row',
  },
  rtlInput: {
    textAlign: 'right',
  },
  scrollView: {
    flexGrow: 1,
  },
  space: {
    width: DIM_H5,
  },
  type: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
})

export default styles
