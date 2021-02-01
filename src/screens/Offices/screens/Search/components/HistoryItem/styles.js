import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_SILVER, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H2, DIM_H7, DIM_V2, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  historyIcon: {
    height: RH(20),
    resizeMode: 'contain',
    tintColor: DARK_SILVER,
    width: RH(20),
  },
  removeButton: {
    paddingHorizontal: DIM_H2,
    paddingVertical: DIM_V3,
  },
  removeIcon: {
    height: RH(14),
    resizeMode: 'contain',
    tintColor: DARK_SILVER,
    width: RH(14),
  },
  searchText: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  spacing: {
    width: DIM_H7,
  },
  textContainer: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V2,
  },
})

export default styles
