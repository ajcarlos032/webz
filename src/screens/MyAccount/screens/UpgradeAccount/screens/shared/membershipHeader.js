/* eslint-disable no-bitwise */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { RH } from '@theme/utils'
import { WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import { DIM_H7, DIM_V7, SCREEN_WIDTH } from '@root/constants'

const MembershipHeader = ({ name }) => {
  const generateColor = useCallback(() => {
    const hashCode = (str) => {
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
      }
      return hash
    }
    const intToRGB = (i) => {
      const c = (i & 0x00ffffff).toString(16).toUpperCase()

      return `#${'00000'.substring(0, 6 - c.length)}${c}`
    }
    const startColor = intToRGB(hashCode(name))
    const endColor = `${startColor}75`
    return [startColor, endColor]
  }, [name])

  return (
    <LinearGradient
      style={[styles.container]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={generateColor(name)}
    >
      <Text style={styles.name}>{name}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: RH(8),
    flexDirection: 'column',
    height: 0.6 * SCREEN_WIDTH,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  name: {
    alignSelf: 'flex-start',
    color: WHITE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
  },
})

MembershipHeader.propTypes = {
  name: PropTypes.string.isRequired,
}

MembershipHeader.defaultProps = {}

export default MembershipHeader
