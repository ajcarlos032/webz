import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import Card from '@components/Card'

import styles from './styles'

const DoorKey = ({ isRTL, label, doorKey }) => {
  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.doorKeysContainer, isRTL && styles.rtlRow]}>
          {`${doorKey}`.split('').map((key, index) => (
            <View key={index} style={styles.doorKeyContainer}>
              <Text style={styles.doorKey}>{key}</Text>
            </View>
          ))}
        </View>
      </Card>
    </View>
  )
}

DoorKey.propTypes = {
  doorKey: PropTypes.number.isRequired,
  isRTL: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

DoorKey.defaultProps = {
  isRTL: false,
}

export default DoorKey
