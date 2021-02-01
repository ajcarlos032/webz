import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import { ERROR } from '@theme/colors'
import { FONT_ROBOTO_MEDIUM, FONT_SIZE_SM } from '@theme/fonts'

const FormError = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  error: {
    color: ERROR,
    flex: 1,
    fontFamily: FONT_ROBOTO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    textAlign: 'right',
  },
})

FormError.propTypes = {
  error: PropTypes.string.isRequired,
}

FormError.defaultProps = {}

export default FormError
