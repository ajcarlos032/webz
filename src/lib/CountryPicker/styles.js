import { StyleSheet } from 'react-native'

import { BLACK } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_XL } from '@theme/fonts'
import { DIM_H4, DIM_H9 } from '@root/constants'
import { RW } from '@theme/utils'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    minWidth: RW(100),
  },
  dialCode: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XL,
    paddingHorizontal: DIM_H4,
  },
  flag: {
    width: DIM_H9,
  },
  pickerButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default styles
