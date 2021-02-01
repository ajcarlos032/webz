import React, { useEffect, useMemo, useState } from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'
import { Portal } from 'react-native-portalize'
import { useIsFocused } from '@react-navigation/native'

import { SCREEN_WIDTH, DIM_H1, DIM_H2 } from '@root/constants'
import { OVERLAY } from '@theme/colors'

const spinner = require('@assets/images/spinner.gif')

const FullScreenLoader = ({ onTimeout, timeout, fullScreen }) => {
  const isFocused = useIsFocused()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let t
    if (isFocused) {
      t = setTimeout(() => {
        setVisible(false)
        if (onTimeout) onTimeout()
      }, timeout)
    } else {
      setVisible(false)
      clearTimeout(t)
    }
    return () => clearTimeout(t)
  }, [onTimeout, timeout, isFocused])

  const wrapperStyle = useMemo(() => {
    if (!fullScreen) return { backgroundColor: OVERLAY, borderRadius: DIM_H2, padding: DIM_H1 }

    return {
      alignItems: 'center',
      backgroundColor: '#00000099',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    }
  }, [fullScreen])

  if (!visible) return null

  return (
    <Portal>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: OVERLAY,
          height: '100%',
          justifyContent: 'center',
          position: 'absolute',
          width: SCREEN_WIDTH,
          zIndex: 99,
        }}
      >
        <View style={wrapperStyle}>
          <Image source={spinner} style={{ height: 50, width: 50 }} />
        </View>
      </View>
    </Portal>
  )
}

FullScreenLoader.propTypes = {
  fullScreen: PropTypes.bool,
  onTimeout: PropTypes.func,
  timeout: PropTypes.number,
}
FullScreenLoader.defaultProps = {
  fullScreen: false,
  onTimeout: undefined,
  timeout: 5000,
}

export default FullScreenLoader
