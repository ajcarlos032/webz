import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import { TRANSPARENT } from '@theme/colors'

const NavRight = ({ children }) => {
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

NavRight.propTypes = {
  children: PropTypes.any,
}

NavRight.defaultProps = {
  children: null,
}

export default NavRight
