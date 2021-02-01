import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, ERROR, LIGHT_GRAY, SECONDARY, SILVER, YELLOW } from '@theme/colors'
import {
  FONT_ROBOTO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H1, DIM_H2, DIM_H7, DIM_V3, DIM_V4, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  changeDefaultButton: {
    padding: DIM_H1,
  },
  container: {
    flexGrow: 1,
  },
  default: {
    color: LIGHT_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  defaultMethod: {
    borderWidth: RW(4),
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mark: {
    borderColor: YELLOW,
    borderRadius: RW(11),
    borderWidth: RH(1),
    height: RW(22),
    width: RW(22),
  },
  paymentMethod: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
  },
  paymentMethodContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  paymentMethodField: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    height: RH(64),
    justifyContent: 'space-between',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V4,
    position: 'relative',
    width: '100%',
  },
  paymentMethods: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V7,
    width: '100%',
  },
  removeButton: {
    paddingVertical: DIM_V3,
  },
  removeText: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
