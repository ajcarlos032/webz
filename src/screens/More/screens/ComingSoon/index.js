import React from 'react'
import { Text, View } from 'react-native'

import MoreScreenWrapper from '@screens/More/screens/shared/moreScreenWrapper'

import styles from './styles'

const ComingSoon = () => {
  return (
    <MoreScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Coming Soon</Text>
      </View>
    </MoreScreenWrapper>
  )
}

ComingSoon.propTypes = {}

ComingSoon.defaultProps = {}

export default ComingSoon
