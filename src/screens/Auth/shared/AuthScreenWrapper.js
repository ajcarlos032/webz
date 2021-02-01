import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import FullScreenLoader from '@components/FullScreenLoader'
import NavHeader from '@navigation/components/NavHeader'

import { BACKGROUND } from '@theme/colors'

const AuthScreenWrapper = ({ onBack, children, loading }) => {
  return (
    <View style={styles.container}>
      {loading && <FullScreenLoader />}
      <View style={styles.area}>
        <NavHeader hasBack onBack={onBack} />
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: BACKGROUND,
    flex: 1,
    flexDirection: 'column',
  },
})

AuthScreenWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  onBack: PropTypes.func,
}

AuthScreenWrapper.defaultProps = {
  loading: false,
  onBack: undefined,
}

export default AuthScreenWrapper
