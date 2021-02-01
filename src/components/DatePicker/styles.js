import { StyleSheet } from 'react-native'

import { GRAY, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SF_PRO_REGULAR, FONT_SIZE_MD, FONT_SIZE_XL } from '@theme/fonts'
import { DIM_V9 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: DIM_V9,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  selectedLabel: {
    color: YELLOW,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
  },
})

export default styles
