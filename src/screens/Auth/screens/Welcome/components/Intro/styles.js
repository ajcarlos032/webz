import { StyleSheet } from 'react-native'

import { DIM_H, DIM_V1, DIM_V8, HORIZONTAL_DIM, SCREEN_WIDTH } from '@root/constants'
import { PRIMARY_BLACK, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_3XL,
  LINE_HEIGHT18,
  LINE_HEIGHT35,
} from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  dot: {
    backgroundColor: YELLOW,
    borderRadius: 4,
    height: 8,
    marginHorizontal: 3.5,
    width: 8,
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  introContainer: {
    flexDirection: 'column',
    paddingHorizontal: DIM_H,
    width: SCREEN_WIDTH - 2 * HORIZONTAL_DIM,
  },
  message: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
    textAlign: 'left',
  },
  paginatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: DIM_V1,
    paddingTop: DIM_V8,
  },
  scollView: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    paddingTop: DIM_V1,
  },
  title: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT35,
    textAlign: 'left',
  },
})

export default styles
