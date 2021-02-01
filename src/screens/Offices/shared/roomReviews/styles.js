import { StyleSheet } from 'react-native'

import { DARK_GRAY, PRIMARY_BLACK, TRANSPARENT, WHITE } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE, LINE_HEIGHT18, LINE_HEIGHT20 } from '@theme/fonts'
import {
  DIM_H0,
  DIM_H2,
  DIM_H5,
  DIM_V1,
  DIM_V3,
  DIM_V6,
  DIM_V7,
  SCREEN_WIDTH,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  card: {
    marginRight: DIM_H0,
    width: (3 * SCREEN_WIDTH) / 4,
  },
  container: {
    backgroundColor: WHITE,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  rating: {
    paddingTop: DIM_V1,
  },
  review: {
    alignSelf: 'flex-start',
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
  },
  reviewContainer: {
    flex: 1,
    paddingLeft: DIM_H2,
    paddingTop: DIM_V6,
  },
  reviewItem: {
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  reviewItemContainer: {
    paddingLeft: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
  },
  reviews: {
    backgroundColor: TRANSPARENT,
    minWidth: '100%',
  },
  title: {
    alignSelf: 'flex-start',
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
