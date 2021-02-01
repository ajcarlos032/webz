import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, ERROR, SILVER } from '@theme/colors'
import { DIM_H2, DIM_H8, DIM_V, DIM_V1, DIM_V4 } from '@root/constants'
import { FONT_ROBOTO_BOLD, FONT_ROBOTO_MEDIUM, FONT_SIZE_MD } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  error: {
    color: ERROR,
  },
  errorContainer: {
    borderColor: ERROR,
    borderWidth: 1,
  },
  inputContainer: {
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    height: RH(64),
    paddingHorizontal: DIM_H8,
    paddingVertical: DIM_V4,
    position: 'relative',
    width: '100%',
  },
  inputField: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
    height: '100%',
    marginTop: DIM_V1,
    padding: 0,
    width: '100%',
  },
  label: {
    fontFamily: FONT_ROBOTO_BOLD,
    left: DIM_H8,
    paddingVertical: DIM_V,
    position: 'absolute',
  },
  labelActive: {
    fontFamily: FONT_ROBOTO_MEDIUM,
    left: DIM_H8,
    paddingVertical: DIM_V,
    position: 'absolute',
  },
  rtlInput: {
    textAlign: 'right',
  },
  securityField: {
    letterSpacing: 5,
  },
})

export default styles
