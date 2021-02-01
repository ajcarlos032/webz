import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { SHADOW, WHITE } from '@theme/colors'
import { DIM_V1, DIM_V5 } from '@root/constants'

import {
  HIGHLIGHTED_HEIGHT,
  SLIDER_CURSOR_WRAPPER_DIM,
  SLIDER_CURSOR_DIM,
  SLIDER_WIDTH,
} from '@screens/Offices/shared/utils/constants'

export const sliderStyles = StyleSheet.create({
  container: {
    bottom: 0,
    flexDirection: 'row',
    height: HIGHLIGHTED_HEIGHT,
    position: 'absolute',
    width: SLIDER_WIDTH,
    zIndex: 2,
  },
})

export const timeLinePicker = StyleSheet.create({
  container: {
    paddingVertical: DIM_V5,
  },
  scrollContainer: {
    height: '100%',
    width: SLIDER_WIDTH,
  },
  scrollView: {
    height: RH(110),
    paddingVertical: DIM_V1,
  },
})

export const cursorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: HIGHLIGHTED_HEIGHT,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: SLIDER_CURSOR_WRAPPER_DIM,
  },
  cursor: {
    backgroundColor: WHITE,
    borderRadius: SLIDER_CURSOR_DIM / 2,
    height: SLIDER_CURSOR_DIM,
    width: SLIDER_CURSOR_DIM,
  },
  dropShadow: {
    elevation: 5,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})
