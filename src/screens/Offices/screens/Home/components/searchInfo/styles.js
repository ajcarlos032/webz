import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { BLACK, PRIMARY_BLACK, WHITE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_H3, DIM_V5, DIM_V6, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  clearButton: {
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: RH(12),
    height: RH(24),
    justifyContent: 'center',
    width: RH(24),
  },
  clearIcon: {
    height: RH(20),
    resizeMode: 'contain',
    tintColor: WHITE,
    width: RH(20),
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  resultContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: DIM_V6,
    width: '100%',
  },
  searchIcon: {
    height: RH(14),
    resizeMode: 'contain',
    width: RH(14),
  },
  searchResult: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
  },
  searchText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    paddingHorizontal: DIM_H3,
  },
  spacing: {
    flex: 1,
  },
})

export default styles
