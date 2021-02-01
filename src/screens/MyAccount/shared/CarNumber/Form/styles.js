import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, ERROR, SILVER } from '@theme/colors'
import {
  FONT_ROBOTO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_ROBOTO_MEDIUM,
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  LINE_HEIGHT18,
} from '@theme/fonts'
import { DIM_H2, DIM_H8, DIM_V4, DIM_V5, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

export const BUTTON_CONTAINER_HEIGHT = RH(120)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: BUTTON_CONTAINER_HEIGHT,
  },
  carNumber: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
    height: '100%',
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  description: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    width: '80%',
  },
  descriptionContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: DIM_V5,
  },
  error: {
    color: ERROR,
  },
  errorField: {
    borderColor: ERROR,
    borderWidth: 1,
  },
  field: {
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    height: RH(64),
    marginTop: DIM_V7,
    paddingHorizontal: DIM_H8,
    paddingVertical: DIM_V4,
    position: 'relative',
    width: '100%',
  },
  fields: {
    flexDirection: 'column',
    width: '100%',
  },
  icon: {
    height: RH(110),
    width: RH(110),
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: RH(50),
    width: '100%',
  },
  message: {
    color: ERROR,
    fontFamily: FONT_ROBOTO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    marginTop: DIM_V4,
    textAlign: 'center',
  },
  rtlInput: {
    textAlign: 'right',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
