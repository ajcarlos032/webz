import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { RH } from '@theme/utils'
import { TRANSPARENT } from '@theme/colors'

import styles from './styles'

const ModalDropdownPicker = ({
  data,
  renderItem,
  renderExtraItem,
  modalStyle,
  dropdownStyle,
  visible,
  onClose,
}) => {
  if (!visible) return null

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor={TRANSPARENT}
      coverScreen
      isVisible
      style={[styles.modal, modalStyle]}
      onBackdropPress={onClose}
    >
      <View style={[styles.dropDownContainer, dropdownStyle, { top: RH(230) }]}>
        {data.map(renderItem)}
        {renderExtraItem()}
      </View>
    </Modal>
  )
}

ModalDropdownPicker.propTypes = {
  data: PropTypes.array.isRequired,
  dropdownStyle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  modalStyle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  onClose: PropTypes.func.isRequired,
  renderExtraItem: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  visible: PropTypes.bool,
}

ModalDropdownPicker.defaultProps = {
  dropdownStyle: {},
  modalStyle: {},
  renderExtraItem: () => <></>,
  visible: false,
}

export default ModalDropdownPicker
