/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prop-types */
import React from 'react'

import { PanResponder, View, I18nManager } from 'react-native'

import TimeLine from '@screens/Offices/shared/timeLine'
import Cursor from './cursor'

import { SLIDER_CURSOR_WRAPPER_DIM, SLIDER_WIDTH } from '@screens/Offices/shared/utils/constants'
import { getSnapPoints, snapPoint } from '@screens/Offices/shared/utils'

import { sliderStyles as styles } from '../sharedStyles'

export default class Slider extends React.Component {
  static defaultProps = {
    minCursorOverlapDistance: 0,
    onValuesChange: () => {},
    onValuesChangeFinish: () => {},
    onValuesChangeStart: () => {},
    slipDisplacement: 0,
    values: [0],
  }

  constructor(props) {
    super(props)

    const { values } = props

    const snapPoints = getSnapPoints()

    const initialValues = values.map((value) => snapPoint(value, snapPoints))

    this.state = {
      pastOne: initialValues[0],
      pastTwo: initialValues[1],
      positionOne: initialValues[0],
      positionTwo: initialValues[1],
      snapPoints,
      valueOne: values[0],
      valueTwo: values[1],
    }

    this.subscribePanResponder()
  }

  componentDidUpdate(prevProps) {
    const { onePressed, positionOne, positionTwo, snapPoints, twoPressed } = this.state

    if (typeof positionOne === 'undefined' && typeof positionTwo !== 'undefined') return

    if (onePressed || twoPressed) return

    const nextState = {}
    const { values } = this.props
    const { values: _values } = prevProps

    if (_values[0] !== values[0] || _values[1] !== values[1]) {
      nextState.valueOne = values[0]
      nextState.pastOne = values[0]
      nextState.positionOne = values[0]

      nextState.valueTwo = values[1]
      nextState.pastTwo = values[1]
      nextState.positionTwo = values[1]

      this.setState(nextState)
    }
  }

  subscribePanResponder = () => {
    const customPanResponder = (start, move, end) => {
      return PanResponder.create({
        onStartShouldSetPanResponder: (_evt, _gestureState) => true,
        onStartShouldSetPanResponderCapture: (_evt, _gestureState) => true,
        // eslint-disable-next-line sort-keys
        onMoveShouldSetPanResponder: (_evt, _gestureState) => true,
        onMoveShouldSetPanResponderCapture: (_evt, _gestureState) => true,
        onPanResponderGrant: (_evt, _gestureState) => start(),
        onPanResponderMove: (_evt, gestureState) => move(gestureState),
        onPanResponderTerminationRequest: (_evt, _gestureState) => false,
        // eslint-disable-next-line sort-keys
        onPanResponderRelease: (_evt, gestureState) => end(gestureState),
        onPanResponderTerminate: (_evt, gestureState) => end(gestureState),
        onShouldBlockNativeResponder: (_evt, _gestureState) => true,
      })
    }

    this._panResponderOne = customPanResponder(this.startOne, this.moveOne, this.endOne)
    this._panResponderTwo = customPanResponder(this.startTwo, this.moveTwo, this.endTwo)
  }

  startOne = () => {
    this.props.onValuesChangeStart()
    this.setState({
      onePressed: !this.state.onePressed,
    })
  }

  startTwo = () => {
    this.props.onValuesChangeStart()
    this.setState({
      twoPressed: !this.state.twoPressed,
    })
  }

  moveOne = (gestureState) => {
    const { minCursorOverlapDistance, slipDisplacement, onValuesChange } = this.props

    const { pastOne, positionTwo, snapPoints, valueOne, valueTwo } = this.state

    const accumDistance = gestureState.dx
    const accumDistanceDisplacement = gestureState.dy

    const unconfined = I18nManager.isRTL ? pastOne - accumDistance : accumDistance + pastOne
    const bottom = 0
    const trueTop = positionTwo - minCursorOverlapDistance
    const top = trueTop === 0 ? 0 : trueTop || SLIDER_WIDTH
    const confined = unconfined < bottom ? bottom : unconfined > top ? top : unconfined

    if (Math.abs(accumDistanceDisplacement) < slipDisplacement || !slipDisplacement) {
      this.setState({
        positionOne: confined,
      })
    }
  }

  moveTwo = (gestureState) => {
    const { minCursorOverlapDistance, slipDisplacement } = this.props
    const { pastTwo, positionOne } = this.state

    const accumDistance = gestureState.dx
    const accumDistanceDisplacement = gestureState.dy

    const unconfined = I18nManager.isRTL ? pastTwo - accumDistance : accumDistance + pastTwo
    const bottom = positionOne + minCursorOverlapDistance
    const top = SLIDER_WIDTH
    const confined = unconfined < bottom ? bottom : unconfined > top ? top : unconfined

    if (Math.abs(accumDistanceDisplacement) < slipDisplacement || !slipDisplacement) {
      this.setState({
        positionTwo: confined,
      })
    }
  }

  endOne = () => {
    const snappedPosition = snapPoint(this.state.positionOne, this.state.snapPoints)
    this.setState(
      {
        onePressed: !this.state.onePressed,
        pastOne: snappedPosition,
        positionOne: snappedPosition,
        valueOne: snappedPosition,
      },
      () => {
        this.props.onValuesChangeFinish([this.state.valueOne, this.state.valueTwo])
      },
    )
  }

  endTwo = () => {
    const snappedPosition = snapPoint(this.state.positionTwo, this.state.snapPoints)
    this.setState(
      {
        pastTwo: snappedPosition,
        positionTwo: snappedPosition,
        twoPressed: !this.state.twoPressed,
        valueTwo: snappedPosition,
      },
      () => {
        this.props.onValuesChangeFinish([this.state.valueOne, this.state.valueTwo])
      },
    )
  }

  render() {
    const { positionOne, positionTwo } = this.state

    const leftCursorOffsetX = positionOne - SLIDER_CURSOR_WRAPPER_DIM / 2
    const rightCursorOffsetX = positionTwo - SLIDER_CURSOR_WRAPPER_DIM / 2
    const activeOffsetX = positionOne
    const activeWidth = positionTwo - positionOne

    return (
      <View style={styles.container}>
        <TimeLine
          offsetX={activeOffsetX}
          width={activeWidth}
          onTap={this.props.onValuesChangeFinish}
        />
        <Cursor panHandlers={this._panResponderOne.panHandlers} offsetX={leftCursorOffsetX} />
        <Cursor panHandlers={this._panResponderTwo.panHandlers} offsetX={rightCursorOffsetX} />
      </View>
    )
  }
}
