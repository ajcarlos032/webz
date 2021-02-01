import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Clipboard from '@react-native-community/clipboard'

import Card from '@components/Card'

import { showToast, TYPE } from '@helpers/toast'

import styles from './styles'

const copyIcon = require('@assets/icons/ic_copy.png')

const WifiCode = ({ label, ssid, pass, copyMessage }) => {
  const onCopy = useCallback(() => {
    Clipboard.setString(pass)
    showToast(copyMessage, TYPE.SUCCESS)
  }, [copyMessage, pass])

  if (!ssid && !pass) return null

  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <Text style={styles.label}>{label}</Text>
        {!!ssid && <Text style={styles.ssid}>{ssid}</Text>}
        {!!pass && (
          <View style={styles.passContainer}>
            <Text style={styles.pass}>{pass}</Text>
            <TouchableOpacity style={styles.copyButton} activeOpacity={0.5} onPress={onCopy}>
              <Image style={styles.copyIcon} source={copyIcon} />
            </TouchableOpacity>
          </View>
        )}
      </Card>
    </View>
  )
}

WifiCode.propTypes = {
  copyMessage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  pass: PropTypes.string,
  ssid: PropTypes.string,
}

WifiCode.defaultProps = {
  pass: null,
  ssid: null,
}

export default WifiCode
