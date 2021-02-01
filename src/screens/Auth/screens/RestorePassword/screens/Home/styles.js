import { StyleSheet } from 'react-native'

import { BACKGROUND, DARK_BLUE, SHADOW, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_MD } from '@theme/fonts'
import {
  DIM_H4,
  DIM_H7,
  DIM_H8,
  DIM_H10,
  DIM_H11,
  DIM_V3,
  DIM_V5,
  DIM_V8,
  DIM_V13,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  arrowIcon: {
    height: DIM_V5,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  buttonText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_MD,
    paddingHorizontal: DIM_H7,
  },
  dropShadow: {
    elevation: 10,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  expandShadow: {
    elevation: 5,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  icon: {
    width: DIM_H8,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H11 / 2,
    height: DIM_H11,
    justifyContent: 'center',
    width: DIM_H11,
  },
  menuButton: {
    backgroundColor: BACKGROUND,
    paddingHorizontal: DIM_H10,
    paddingVertical: DIM_V8,
  },
  menuButtonContainer: {
    backgroundColor: WHITE,
    borderRadius: DIM_H4,
    marginVertical: DIM_V3,
    overflow: 'hidden',
  },
  menuButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V13,
  },
  spacing: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
