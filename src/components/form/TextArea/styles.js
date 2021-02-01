import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, ERROR, SILVER, TRANSPARENT } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_H2, DIM_H7 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  error: {
    color: ERROR,
  },
  errorContainer: {
    borderColor: ERROR,
  },
  inputContainer: {
    backgroundColor: SILVER,
    borderColor: TRANSPARENT,
    borderRadius: DIM_H2,
    borderWidth: 1,
    height: RH(150),
    paddingHorizontal: DIM_H7,
    position: 'relative',
    width: '100%',
  },
  rtlInput: {
    textAlign: 'right',
  },
  textArea: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
})

export default styles
