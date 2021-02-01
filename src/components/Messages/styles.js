import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DIM_H3, DIM_V3, HORIZONTAL_DIM } from '@root/constants'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_XS, LINE_HEIGHT20 } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: DIM_V3,
    width: '100%',
  },
  dividerLabel: {
    color: '#BCC2C7',
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XS,
    lineHeight: LINE_HEIGHT20,
    paddingHorizontal: DIM_H3,
  },
  line: {
    backgroundColor: '#BCC2C775',
    flex: 1,
    height: RH(1),
  },
  messages: {
    flex: 1,
    marginBottom: DIM_V3,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V3,
  },
})

export default styles
