import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, LIGHT_GRAY, SECONDARY, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import {
  DIM_H0,
  DIM_H6,
  DIM_V7,
  DIM_V8,
  DIM_V9,
  HORIZONTAL_DIM,
  SCREEN_HEIGHT,
} from '@root/constants'

const styles = StyleSheet.create({
  button: {
    paddingBottom: DIM_V7,
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
  modal: {
    paddingHorizontal: 0,
  },
  textContainer: {
    backgroundColor: SECONDARY,
    borderColor: LIGHT_GRAY,
    height: SCREEN_HEIGHT / 3,
    paddingVertical: DIM_V7,
  },
  ticketContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H6,
    borderTopRightRadius: DIM_H6,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
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
