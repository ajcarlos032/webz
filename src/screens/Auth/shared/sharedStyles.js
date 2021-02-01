import { StyleSheet } from 'react-native'

import {
  DIM_V2,
  DIM_V5,
  DIM_V7,
  DIM_V9,
  DIM_V13,
  HORIZONTAL_DIM,
  SCREEN_WIDTH,
} from '@root/constants'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_MEDIUM,
  FONT_SIZE,
  FONT_SIZE_3XL,
  LINE_HEIGHT40,
} from '@theme/fonts'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V2,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  divider: {
    backgroundColor: SECONDARY,
    height: 1,
    width: SCREEN_WIDTH,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V9,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V13,
  },
  formRow: {
    paddingBottom: DIM_V5,
  },
  phoneLogin: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
  },
  phoneLoginContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V2,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
    textAlign: 'left',
  },
  titleContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
})

export default styles
