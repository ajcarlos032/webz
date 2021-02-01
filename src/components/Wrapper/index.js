import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import FullScreenLoader from '../FullScreenLoader'

import styles from './styles'

const Wrapper = ({ loading, children }) => {
  return (
    <View style={styles.container}>
      {loading && <FullScreenLoader />}
      {children}
    </View>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
}

Wrapper.defaultProps = {
  children: null,
  loading: false,
}

export default Wrapper
