import { StyleSheet } from 'react-native'

import { GRAY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_V0, DIM_V9, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  availableAt: {
    alignSelf: 'flex-start',
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingVertical: DIM_V0,
  },
  container: {
    flexDirection: 'column',
    paddingBottom: DIM_V9,
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
})

export default styles
