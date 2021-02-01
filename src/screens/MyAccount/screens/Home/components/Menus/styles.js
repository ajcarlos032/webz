import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_H5, DIM_H7, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  arrowIcon: {
    height: DIM_H5,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'column',
    paddingBottom: RH(50),
    width: '100%',
  },
  icon: {
    height: RH(24),
    width: RH(24),
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(28),
    flexDirection: 'row',
    height: RH(56),
    justifyContent: 'center',
    width: RH(56),
  },
  label: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingHorizontal: DIM_H7,
  },
  menuRow: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  spacing: {
    flex: 1,
  },
})

export default styles
