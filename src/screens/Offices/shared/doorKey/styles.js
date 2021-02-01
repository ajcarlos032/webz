import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, SILVER } from '@theme/colors'
import {
  FONT_ROBOTO_BOLD,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_MD,
  FONT_SIZE_XL,
  LINE_HEIGHT22,
} from '@theme/fonts'
import { DIM_H2, DIM_H9, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingHorizontal: DIM_H9,
    paddingVertical: DIM_V7,
  },
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  doorKey: {
    color: '#1F2F42',
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_XL,
  },
  doorKeyContainer: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    height: RW(60),
    justifyContent: 'center',
    width: RW(60),
  },
  doorKeysContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V7,
  },
  label: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
})

export default styles
