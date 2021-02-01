import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { BLACK, SILVER } from '@theme/colors'
import { FONT_ROBOTO_BOLD, FONT_SIZE_XL } from '@theme/fonts'
import { DIM_H2, DIM_V5 } from '@root/constants'

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    height: RW(60),
    justifyContent: 'center',
    width: RW(60),
  },
  cellText: {
    color: BLACK,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_XL,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlign: 'center',
    width: '100%',
  },
  container: {
    paddingBottom: DIM_V5,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
})

export default styles
