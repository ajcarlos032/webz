import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT20,
  LINE_HEIGHT24,
} from '@theme/fonts'
import { DIM_H7, DIM_V7 } from '@root/constants'

const styles = StyleSheet.create({
  answer: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
    textAlign: 'left',
  },
  area: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  question: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT24,
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default styles
