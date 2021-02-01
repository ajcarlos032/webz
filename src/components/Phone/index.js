import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native'

import { RW } from '@theme/utils'
import { SECONDARY, WHITE } from '@theme/colors'
import { DIM_H2, IS_IOS } from '@root/constants'

const phoneIcon = require('@assets/icons/ic_phone_call.png')
const phoneRTLIcon = require('@assets/icons/ic_rtl_phone_call.png')

const Phone = ({ isRTL, phone }) => {
  const dialCall = useCallback(() => {
    const phoneNumber = IS_IOS ? `telprompt:${phone}` : `tel:${phone}`
    Linking.canOpenURL(phoneNumber).then((supported) => {
      if (supported) {
        Linking.openURL(phoneNumber)
      } else {
        console.log(`Phone number(${phone}) is not available`)
      }
    })
  }, [phone])

  if (!Boolean(phone)) return null

  return (
    <TouchableOpacity style={styles.container} onPress={dialCall}>
      <Image source={isRTL ? phoneRTLIcon : phoneIcon} style={styles.phoneIcon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: SECONDARY,
    borderRadius: RW(58) / 2,
    borderWidth: DIM_H2,
    height: RW(58),
    justifyContent: 'center',
    width: RW(58),
  },
  phoneIcon: {
    height: RW(24),
    width: RW(24),
  },
})

Phone.propTypes = {
  isRTL: PropTypes.bool,
  phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Phone.defaultProps = {
  isRTL: false,
  phone: undefined,
}

export default Phone
