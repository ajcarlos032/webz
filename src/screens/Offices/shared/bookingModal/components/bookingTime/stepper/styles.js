import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, SECONDARY, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE_LG } from '@theme/fonts'
import { DIM_H8, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: DIM_H8 / 2,
    height: DIM_H8,
    justifyContent: 'center',
    width: DIM_H8,
  },
  buttonDisabled: {
    backgroundColor: SECONDARY,
  },
  buttonWrapper: {
    padding: DIM_V3,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    resizeMode: 'contain',
    width: RW(16),
  },
  value: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_LG,
    textAlign: 'center',
    width: RW(200),
  },
})

export default styles
