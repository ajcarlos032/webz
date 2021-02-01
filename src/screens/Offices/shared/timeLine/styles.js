import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, LIGHT_GRAY, SECONDARY, TRANSPARENT } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_SM } from '@theme/fonts'

import {
  HIGHLIGHTED_HEIGHT,
  RANGER_HEIGHT,
  VALUE_NUM_PER_UNIT,
  RULER_MARGIN,
} from '@screens/Offices/shared/utils/constants'

const TIME_POINT_WIDTH = VALUE_NUM_PER_UNIT * RULER_MARGIN

const styles = StyleSheet.create({
  basicTime: {
    backgroundColor: LIGHT_GRAY,
    height: 0,
    width: RW(1),
  },
  container: {
    backgroundColor: SECONDARY,
    bottom: 0,
    height: RANGER_HEIGHT,
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  fullTime: {
    height: RH(58),
  },
  halfTime: {
    height: RH(30),
  },
  highlighted: {
    bottom: 0,
    height: HIGHLIGHTED_HEIGHT,
    left: 0,
    position: 'absolute',
    zIndex: 0,
  },
  timeLabel: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    height: RH(20),
    position: 'absolute',
    textAlign: 'center',
    top: -RH(20),
    width: TIME_POINT_WIDTH,
    zIndex: 1,
  },
  timeStepper: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    bottom: 0,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: TIME_POINT_WIDTH,
    zIndex: 1,
  },
})

export default styles
