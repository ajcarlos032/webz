import Animated, { Easing } from 'react-native-reanimated'

const { Value, Clock, block, clockRunning, cond, set, startClock, stopClock, timing } = Animated

const timingConfig = {
  duration: 200,
  easing: Easing.linear,
  toValue: 0.9,
}

export const runTiming = (fromValue, toValue) => {
  const clock = new Clock()
  const state = {
    finished: new Value(0),
    frameTime: new Value(0),
    position: new Value(0),
    time: new Value(0),
  }

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, fromValue),
      set(state.frameTime, 0),
      startClock(clock),
    ]),
    timing(clock, state, { ...timingConfig, toValue }),
    cond(state.finished, stopClock(clock)),
    state.position,
  ])
}
