import { StyleSheet } from 'react-native'

import { DARK_BLUE, WHITE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_SM } from '@theme/fonts'
import { DIM_H2, DIM_H8, DIM_H9, DIM_V2, DIM_V7 } from '@root/constants'

const styles = StyleSheet.create({
  category: {
    backgroundColor: WHITE,
    borderColor: DARK_BLUE,
    borderRadius: DIM_H9,
    borderWidth: 1,
    paddingHorizontal: DIM_H8,
    paddingVertical: DIM_V2,
  },
  categoryContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: DIM_H2,
  },
  categoryName: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
  container: {
    width: '100%',
  },
  scrollView: {
    flexDirection: 'row',
    minWidth: '100%',
    paddingVertical: DIM_V7,
  },
  selected: {
    backgroundColor: YELLOW,
    borderColor: YELLOW,
  },
})

export default styles
