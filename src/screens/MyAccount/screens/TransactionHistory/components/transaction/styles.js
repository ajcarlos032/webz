import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
  LINE_HEIGHT24,
} from '@theme/fonts'
import { DIM_V3, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  content: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT24,
  },
  credit: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  date: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DIM_V3,
  },
  time: {
    alignSelf: 'flex-start',
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    marginTop: DIM_V7,
  },
})

export default styles
