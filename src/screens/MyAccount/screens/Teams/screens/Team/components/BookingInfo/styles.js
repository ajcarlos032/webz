import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY, SUCCESS, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_MD,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_V3, DIM_V7 } from '@root/constants'

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  bookingActive: {
    color: `${SUCCESS}75`,
  },
  bookingCompleted: {
    color: SUCCESS,
  },
  bookingState: {
    color: `${YELLOW}75`,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT28,
  },
  container: {
    borderTopColor: SECONDARY,
    borderTopWidth: RH(1),
    flex: 1,
    paddingVertical: DIM_V7,
  },
  dateTime: {
    paddingHorizontal: 0,
    paddingVertical: DIM_V3,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT28,
  },
})

export default styles
