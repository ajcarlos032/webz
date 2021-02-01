import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { PRIMARY_BLACK } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import { DIM_V9, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingBottom: RH(70),
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  favoriteIcon: {
    height: RW(60),
    resizeMode: 'contain',
    width: RW(60),
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    marginTop: DIM_V9,
    textAlign: 'center',
    width: '75%',
  },
})

export default styles
