import { StyleSheet } from 'react-native'

import { DARK_BLUE, DARK_GRAY } from '@theme/colors'
import {
  FONT_SIZE,
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_MEDIUM,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H3, DIM_H5, DIM_H7, DIM_V3, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  facilities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: DIM_H7,
    paddingTop: DIM_V3,
  },
  facilityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: DIM_V3,
    width: '50%',
  },
  facilityIcon: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE,
  },
  facilityName: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    paddingLeft: DIM_H5,
    paddingRight: DIM_H3,
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
