import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { BLACK, DARK_BLUE } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_SM,
  LINE_HEIGHT18,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H6, DIM_V1, DIM_V5, DIM_V6, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  icon: {
    height: RW(20),
    width: RW(20),
  },
  rating: {
    paddingTop: DIM_V1,
  },
  review: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    textAlign: 'left',
  },
  reviewContainer: {
    paddingTop: DIM_V6,
    width: '100%',
  },
  reviewItem: {
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  reviewItemContainer: {
    paddingVertical: DIM_V1,
  },
  reviewItemHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: DIM_V5,
  },
  roomName: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  spacing: {
    flex: 1,
  },
})

export default styles
