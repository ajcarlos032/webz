import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { GRAY, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import {
  FONT_SIZE,
  FONT_SIZE_SM,
  FONT_SF_PRO_MEDIUM,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
} from '@theme/fonts'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  label: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  labelContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  subLabel: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT22,
  },
})

export default styles
