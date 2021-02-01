/* eslint-disable react/sort-comp */
// https://github.com/geremih/react-native-circular-action-menu
import React, { Component } from 'react'
import { View, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import ActionButtonItem from './ActionButtonItem'

import styles from './styles'

const alignMap = {
  center: {
    alignItems: 'center',
    endDegree: 360,
    justifyContent: 'flex-end',
    startDegree: 180,
  },

  left: {
    alignItems: 'flex-start',
    endDegree: 360,
    justifyContent: 'flex-end',
    startDegree: 270,
  },

  right: {
    alignItems: 'flex-end',
    endDegree: 270,
    justifyContent: 'flex-end',
    startDegree: 180,
  },
}

export default class ActionButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active,
      anim: new Animated.Value(props.active ? 1 : 0),
    }

    this.timeout = null
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  getRadian = (degree) => (degree * Math.PI) / 180

  animateButton() {
    if (this.state.active) {
      this.reset()
      return
    }

    Animated.spring(this.state.anim, {
      duration: 200,
      toValue: 1,
    }).start()

    this.setState({ active: true })
  }

  reset() {
    Animated.spring(this.state.anim, {
      duration: 200,
      toValue: 0,
    }).start()

    setTimeout(() => {
      this.setState({ active: false })
    }, 300)
  }

  onActionButtonPress = () => {
    this.props.onPress()
    if (this.props.children) {
      this.animateButton()
    }
  }

  renderButton() {
    return (
      <View style={[styles.actionBarItem, { height: this.props.size, width: this.props.size }]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onLongPress={this.onActionButtonPress}
          onPress={this.onActionButtonPress}
        >
          <Animated.View
            style={[
              styles.btn,
              {
                backgroundColor: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.props.buttonColor, this.props.btnOutRange],
                }),
                borderRadius: this.props.size / 2,
                height: this.props.size,
                transform: [
                  {
                    scale: this.state.anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, this.props.outRangeScale],
                    }),
                  },
                  {
                    rotate: this.state.anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', `${this.props.degrees}deg`],
                    }),
                  },
                ],
                width: this.props.size,
              },
            ]}
          >
            {this.renderButtonIcon(this.state.active ? this.props.closeIcon : this.props.openIcon)}
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }

  renderButtonIcon(icon) {
    if (icon) {
      return icon
    }

    return (
      <Animated.Text
        style={[
          styles.btnText,
          {
            color: this.state.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [this.props.buttonTextColor, this.props.btnOutRangeTxt],
            }),
          },
        ]}
      >
        +
      </Animated.Text>
    )
  }

  renderActions() {
    if (!this.state.active) return null
    const startDegree = this.props.startDegree || alignMap[this.props.position].startDegree
    const endDegree = this.props.endDegree || alignMap[this.props.position].endDegree
    const startRadian = this.getRadian(startDegree)
    const endRadian = this.getRadian(endDegree)

    const childrenCount = React.Children.count(this.props.children)
    let offset = 0
    if (childrenCount !== 1) {
      offset = (endRadian - startRadian) / (childrenCount - 1)
    }

    return React.Children.map(
      this.props.children,
      (
        {
          props: {
            isRTL,
            offsetX,
            offsetY,
            buttonColor,
            onPress,
            size,
            children,
            title,
            titleStyle,
          },
        },
        index,
      ) => {
        return (
          <ActionButtonItem
            key={index}
            active={this.state.active}
            offsetX={offsetX}
            offsetY={offsetY}
            position={this.props.position}
            anim={this.state.anim}
            size={size}
            radius={this.props.radius}
            angle={startRadian + index * offset}
            buttonColor={buttonColor}
            title={title}
            titleStyle={titleStyle}
            isRTL={isRTL}
            onPress={() => {
              if (this.props.autoInactive) {
                this.timeout = setTimeout(() => {
                  this.reset()
                }, 200)
              }
              onPress()
            }}
          >
            {children}
          </ActionButtonItem>
        )
      },
    )
  }

  renderBackground = () => {
    return (
      <Animated.View
        style={[
          this.props.actionBgStyle,
          {
            transform: [
              {
                scale: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          },
        ]}
      />
    )
  }

  render() {
    let backdrop
    const { alignItems, justifyContent } = alignMap[this.props.position]
    if (this.state.active) {
      backdrop = (
        <TouchableWithoutFeedback style={styles.overlay} onPress={() => this.reset()}>
          <Animated.View
            style={{
              backgroundColor: this.props.bgColor,
              flex: 1,
              opacity: this.state.anim,
            }}
          >
            {this.props.backdrop}
          </Animated.View>
        </TouchableWithoutFeedback>
      )
    }
    return (
      <View pointerEvents="box-none" style={[styles.container, this.props.actionContainerStyle]}>
        {backdrop}
        {this.props.children && this.renderActions()}
        <View
          pointerEvents="box-none"
          style={[
            styles.actionContainer,
            {
              alignItems,
              justifyContent,
              paddingBottom: this.props.offsetY,
              paddingHorizontal: this.props.offsetX,
            },
          ]}
        >
          {this.renderButton()}
        </View>
        {this.renderBackground()}
      </View>
    )
  }
}

ActionButton.Item = ActionButtonItem

ActionButton.propTypes = {
  actionBgStyle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  actionContainerStyle: PropTypes.object,
  active: PropTypes.bool,
  autoInactive: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  bgColor: PropTypes.string,
  btnOutRange: PropTypes.string,
  btnOutRangeTxt: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  children: PropTypes.node,
  closeIcon: PropTypes.node,
  degrees: PropTypes.number,
  endDegree: PropTypes.number.isRequired,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  onPress: PropTypes.func,
  openIcon: PropTypes.node,
  outRangeScale: PropTypes.number,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  radius: PropTypes.number,
  size: PropTypes.number,
  startDegree: PropTypes.number.isRequired,
}

ActionButton.defaultProps = {
  actionBgStyle: {},
  actionContainerStyle: {},
  active: false,
  autoInactive: true,
  backdrop: false,
  bgColor: 'transparent',
  btnOutRange: 'rgba(0,0,0,1)',
  btnOutRangeTxt: 'rgba(255,255,255,1)',
  buttonColor: 'rgba(0,0,0,1)',
  buttonTextColor: 'rgba(255,255,255,1)',
  children: null,
  closeIcon: null,
  degrees: 135,
  offsetX: 0,
  offsetY: 0,
  onPress: () => {},
  openIcon: null,
  outRangeScale: 1,
  position: 'center',
  radius: 100,
  size: 63,
}
