import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { BLACK, LIGHT_GRAY, SECONDARY, WHITE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H2, DIM_H3, HEADER_HEIGHT, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(18),
    height: RH(36),
    justifyContent: 'center',
    width: RH(36),
  },
  backIcon: {
    height: RH(14),
    resizeMode: 'contain',
  },
  clearButton: {
    alignItems: 'center',
    backgroundColor: LIGHT_GRAY,
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
    alignItems: 'center',
    backgroundColor: WHITE,
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: DIM_H3,
    flex: 1,
    flexDirection: 'row',
    height: RH(36),
    paddingHorizontal: DIM_H3,
  },
  rtlInput: {
    textAlign: 'right',
  },
  searchIcon: {
    height: RH(14),
    resizeMode: 'contain',
    width: RH(14),
  },
  searchInput: {
    color: BLACK,
    flex: 1,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    paddingHorizontal: DIM_H2,
    paddingVertical: 0,
  },
  spacing: {
    width: DIM_H3,
  },
})

export default styles
