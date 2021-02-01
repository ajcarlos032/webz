import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import { TRANSPARENT } from '@theme/colors'

const NavLeft = ({ children }) => {
  if (!children) return null
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    flexDirection: 'row',
    height: '100%',
  },
})

NavLeft.propTypes = {
  children: PropTypes.any,
}

NavLeft.defaultProps = {
  children: null,
}

export default NavLeft
