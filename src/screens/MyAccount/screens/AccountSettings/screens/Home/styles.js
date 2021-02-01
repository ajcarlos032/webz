import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_H5, DIM_H7, DIM_V7, DIM_V10, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  arrowIcon: {
    height: DIM_H5,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  label: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  languageIcon: {
    height: RH(40),
    marginRight: DIM_H7,
    width: RH(40),
  },
  menuRow: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V10,
    width: '100%',
  },
  spacing: {
    flex: 1,
  },
  titleContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
