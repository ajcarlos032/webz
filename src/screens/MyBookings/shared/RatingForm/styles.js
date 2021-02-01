import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_GRAY, SECONDARY } from '@theme/colors'
import { FONT_SIZE, FONT_SF_PRO_MEDIUM, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_V3, DIM_V5, DIM_V7 } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: DIM_V3,
    paddingTop: DIM_V5,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  label: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    width: '100%',
  },
  ratingContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    paddingHorizontal: 0,
    width: '100%',
  },
  ratingWrapper: {
    paddingVertical: DIM_V5,
  },
  reviewText: {
    paddingTop: DIM_V7,
  },
  reviewTextContainer: {
    paddingHorizontal: 0,
  },
  row: {
    paddingVertical: DIM_V7,
  },
})

export default styles
