import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, PRIMARY_BLACK, SECONDARY, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
  LINE_HEIGHT28,
} from '@theme/fonts'
import {
  DIM_H0,
  DIM_H6,
  DIM_H9,
  DIM_V5,
  DIM_V6,
  DIM_V7,
  DIM_V8,
  DIM_V9,
  HORIZONTAL_DIM,
  SCREEN_HEIGHT,
} from '@root/constants'

const styles = StyleSheet.create({
  add: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  addButton: {
    paddingHorizontal: DIM_H9,
    paddingVertical: DIM_V7,
  },
  button: {
    backgroundColor: WHITE,
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V9,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    height: RH(5),
    width: RW(80),
  },
  handleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: DIM_V7,
  },
  header: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    flexDirection: 'column',
    paddingBottom: DIM_V6,
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  inputRow: {
    paddingVertical: DIM_V5,
  },
  memberNo: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    width: '100%',
  },
  memberRow: {
    flexDirection: 'column',
    width: '100%',
  },
  membersContainer: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  modal: {
    paddingHorizontal: 0,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
  teamContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H6,
    borderTopRightRadius: DIM_H6,
    flexDirection: 'column',
    minHeight: 0.7 * SCREEN_HEIGHT,
    paddingVertical: DIM_V8,
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    paddingVertical: DIM_V8,
    width: '100%',
  },
})

export default styles
