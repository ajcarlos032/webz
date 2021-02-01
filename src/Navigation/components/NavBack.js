import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import { RH } from '@theme/utils'
import { HORIZONTAL_DIM } from '@root/constants'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_XL, LINE_HEIGHT22 } from '@theme/fonts'

import { DARK_BLUE, SECONDARY, TRANSPARENT } from '@theme/colors'

const backIcon = require('@assets/icons/ic_arrow_left.png')
const backRTLIcon = require('@assets/icons/ic_arrow_right.png')

const NavBack = ({ text, onBack = undefined }) => {
  const { isRTL } = useSelector(configSelector)
  let navigation = null

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigation = useNavigation()
  } catch (e) {
    console.log('useNavigation Error: ', e)
  }

  const onBackPress = useCallback(() => {
    if (onBack) onBack()
    else navigation.goBack()
  }, [onBack, navigation])

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.backButton} onPress={onBackPress}>
        <Image source={isRTL ? backRTLIcon : backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      {!!text && <Text style={styles.text}>{text}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(18),
    height: RH(36),
    justifyContent: 'center',
    width: RH(36),
  },
  backIcon: {
    height: RH(14),
    resizeMode: 'contain',
  },
  container: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    flexDirection: 'row',
    height: '100%',
  },
  text: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT22,
    paddingRight: HORIZONTAL_DIM,
  },
})

NavBack.propTypes = {
  onBack: PropTypes.func,
  text: PropTypes.string,
}

NavBack.defaultProps = {
  onBack: undefined,
  text: null,
}

export default NavBack
