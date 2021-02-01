import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Portal } from 'react-native-portalize'
import RNModal from 'react-native-modal'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@root/constants'

import styles from './styles'

const Modal = ({
  isVisible,
  animationIn,
  animationOut,
  hasBackdrop,
  closeOnOverlayTap,
  swipeEnabled,
  onModalHide,
  modalStyle,
  children,
}) => {
  const onBackdropPressed = useCallback(() => {
    if (closeOnOverlayTap) onModalHide()
  }, [closeOnOverlayTap, onModalHide])

  return (
    <Portal>
      <View style={styles.wrapper}>
        <RNModal
          isVisible={isVisible}
          animationIn={animationIn}
          animationOut={animationOut}
          animationInTiming={300}
          deviceHeight={SCREEN_HEIGHT}
          deviceWidth={SCREEN_WIDTH}
          hasBackdrop={hasBackdrop}
          swipeDirection={swipeEnabled ? 'down' : null}
          swipeThreshold={200}
          onSwipeComplete={onModalHide}
          onBackdropPress={onBackdropPressed}
          onModalHide={onModalHide}
          style={[styles.modal, modalStyle]}
        >
          {children}
        </RNModal>
      </View>
    </Portal>
  )
}

Modal.propTypes = {
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  children: PropTypes.node,
  closeOnOverlayTap: PropTypes.bool,
  hasBackdrop: PropTypes.bool,
  isVisible: PropTypes.bool,
  modalStyle: PropTypes.object,
  onModalHide: PropTypes.func,
  swipeEnabled: PropTypes.bool,
}

Modal.defaultProps = {
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  children: null,
  closeOnOverlayTap: true,
  hasBackdrop: false,
  isVisible: false,
  modalStyle: {},
  onModalHide: () => null,
  swipeEnabled: true,
}

export default Modal
