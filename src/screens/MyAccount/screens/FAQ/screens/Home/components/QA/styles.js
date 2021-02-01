import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE_MD, LINE_HEIGHT24 } from '@theme/fonts'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  icon: {
    height: RH(25),
    width: RH(25),
  },
  question: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT24,
    paddingRight: DIM_V7,
  },
  spacing: {
    flex: 1,
  },
})

export default styles
