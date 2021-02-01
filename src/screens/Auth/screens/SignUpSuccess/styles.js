import { StyleSheet } from 'react-native'

import { PRIMARY_BLACK } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_MD,
  FONT_SIZE_5XL,
  LINE_HEIGHT22,
  LINE_HEIGHT48,
} from '@theme/fonts'
import { HORIZONTAL_DIM, DIM_V2, DIM_V8, DIM_V9, DIM_V13 } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: DIM_V2,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V9,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    paddingBottom: DIM_V8,
    paddingTop: DIM_V13,
  },
  title: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_5XL,
    lineHeight: LINE_HEIGHT48,
    textAlign: 'left',
  },
})

export default styles
