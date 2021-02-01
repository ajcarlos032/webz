import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_V7, DIM_V8, DIM_V9, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  bookingTimeContainer: {
    paddingTop: DIM_V7,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  container: {
    flex: 1,
  },
  messageContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V8,
  },
  scrollContainer: {
    flexDirection: 'column',
    paddingVertical: DIM_V9,
  },
  scrollView: {
    borderColor: SECONDARY,
    borderTopWidth: RH(0.75),
    flex: 1,
  },
  successMark: {
    height: RW(85),
    width: RW(85),
  },
  successMessage: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginTop: DIM_V8,
    textAlign: 'center',
  },
})

export default styles
