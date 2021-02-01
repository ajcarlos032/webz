import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import { DIM_H0, DIM_H6, DIM_V7, DIM_V8, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  button: {
    backgroundColor: WHITE,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
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
  infoContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H6,
    borderTopRightRadius: DIM_H6,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V8,
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
