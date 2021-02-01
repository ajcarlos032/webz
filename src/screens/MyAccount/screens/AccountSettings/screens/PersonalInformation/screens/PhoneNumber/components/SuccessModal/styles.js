import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, PRIMARY_BLACK, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SF_PRO_REGULAR, FONT_SIZE_MD, FONT_SIZE_3XL } from '@theme/fonts'
import { DIM_H5, DIM_H7, DIM_V3, DIM_V9, SCREEN_HEIGHT } from '@root/constants'

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    height: 0.75 * SCREEN_HEIGHT,
    marginVertical: RH(75),
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V3,
  },
  header: {
    paddingVertical: DIM_V3,
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    marginTop: DIM_V9,
    textAlign: 'center',
  },
  successIcon: {
    height: RH(85),
    resizeMode: 'contain',
    width: RH(85),
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    textAlign: 'center',
  },
})

export default styles
