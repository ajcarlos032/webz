import { StyleSheet } from 'react-native'

import { DARK_BLUE, LIGHT_GRAY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_V2, DIM_V7, DIM_V11, DIM_V13 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    flexDirection: 'column',
    paddingBottom: DIM_V7,
    width: '100%',
  },
  loadMore: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    textAlign: 'center',
  },
  loadMoreButton: {
    alignSelf: 'center',
    paddingHorizontal: DIM_V7,
    paddingVertical: DIM_V2,
  },
  loadMoreDisabled: {
    color: LIGHT_GRAY,
  },
  managerContainer: {
    paddingBottom: DIM_V11,
    paddingTop: DIM_V13,
  },
})

export default styles
