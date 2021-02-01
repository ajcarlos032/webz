import { StyleSheet } from 'react-native'

import { DARK_BLUE, PRIMARY_BLACK } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT20,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { RH } from '@theme/utils'
import { DIM_V7, DIM_V9, DIM_V13, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  description: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    marginTop: DIM_V9,
    textAlign: 'center',
  },
  emoji: {
    height: RH(52),
    resizeMode: 'contain',
    width: RH(52),
  },
  helper: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
    marginBottom: DIM_V13,
    marginTop: DIM_V7,
    textAlign: 'center',
  },
})

export default styles
