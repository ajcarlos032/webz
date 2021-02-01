import { StyleSheet } from 'react-native'

import { PRIMARY_BLACK } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_3XL, LINE_HEIGHT40 } from '@theme/fonts'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
  },
  backgroundContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  description: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
    textAlign: 'center',
    width: '100%',
  },
})

export default styles
