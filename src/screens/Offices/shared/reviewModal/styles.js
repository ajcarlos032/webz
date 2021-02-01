import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_GRAY, PRIMARY_BLACK, SECONDARY, WHITE } from '@theme/colors'
import {
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
} from '@theme/fonts'
import {
  DIM_H0,
  DIM_H5,
  DIM_V1,
  DIM_V3,
  DIM_V7,
  DIM_V8,
  DIM_V9,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: DIM_V3,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V7,
  },
  container: {
    flex: 1,
  },
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    top: -DIM_V1,
    width: RW(80),
  },
  ratingContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    width: '100%',
  },
  ratingWrapper: {
    paddingBottom: DIM_V3,
    paddingTop: DIM_V9,
  },
  reviewContainer: {
    flexDirection: 'column',
    paddingVertical: DIM_V3,
  },
  reviewModal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
  },
  reviewText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginTop: DIM_V8,
  },
  row: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  title: {
    alignSelf: 'flex-start',
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
})

export default styles
