import { SCREEN_WIDTH } from '@root/constants'
import { RH } from '@root/theme/utils'

export const TIMELINE_START_TIME = '08:30'
export const INITIAL_START_TIME = '09:00'
export const INITIAL_END_TIME = '09:30'
export const FINAL_TIME = '32:30'
export const SLIDE_STEP = 30 // 30 mins
export const HOUR_MIN = 60 // 60 mins
export const DAY_HOURS = 24 // 24 HRS
export const EXTRA_NEXT_MIN = 30 // 30 mins (the time which is at the very end)
export const TIME_COUNT = 10 // number of time points(**:00, **:30) in SCREEN_WIDTH, based on SLIDE_STEP = 30
export const DISPLAY_TIME_GRAPH_UNIT = 30 // draw graph every 30 min
export const VALUE_NUM_PER_UNIT = DISPLAY_TIME_GRAPH_UNIT / SLIDE_STEP

export const AVAILABLE_TIME_NUM = DAY_HOURS * (HOUR_MIN / SLIDE_STEP) + EXTRA_NEXT_MIN / SLIDE_STEP

export const MIN_BOOKING_TIME = 30 // (mins)
export const RANGER_HEIGHT = RH(70)
export const HIGHLIGHTED_HEIGHT = RH(50)
export const RULER_MARGIN = SCREEN_WIDTH / (TIME_COUNT * VALUE_NUM_PER_UNIT)
export const SLIDER_WIDTH = AVAILABLE_TIME_NUM * RULER_MARGIN
export const SLIDER_CURSOR_WRAPPER_DIM = 1.5 * RULER_MARGIN
export const SLIDER_CURSOR_DIM = RH(28)
export const INITIAL_OFFSET = (VALUE_NUM_PER_UNIT * RULER_MARGIN) / 2
