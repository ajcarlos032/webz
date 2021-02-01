import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, OVERLAY, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_3XL } from '@theme/fonts'
import { DIM_H5, DIM_H7, DIM_V3, DIM_V7, HORIZONTAL_DIM, SCREEN_HEIGHT } from '@root/constants'

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flexDirection: 'column',
    height: 0.6 * SCREEN_HEIGHT,
    marginVertical: RH(75),
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
  },
  header: {
    paddingVertical: DIM_V3,
    width: '75%',
  },
  modal: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: OVERLAY,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
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
