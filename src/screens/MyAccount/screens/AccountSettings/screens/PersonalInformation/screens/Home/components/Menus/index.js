import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const MENUS = [
  { key: 'password', screen: 'Password' },
  { key: 'phoneNumber', screen: 'PhoneNumber' },
  { key: 'carNumber', screen: 'CarNumbers' },
]

const Menus = ({ onPressMenu }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const renderMenu = useCallback(
    (menu) => (
      <TouchableOpacity
        key={menu.key}
        style={styles.menuRow}
        onPress={() => onPressMenu(menu.screen)}
      >
        <Text style={styles.label}>{t(`account.${menu.key}`)}</Text>
        <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
    ),
    [isRTL, t, onPressMenu],
  )

  return <View style={styles.container}>{MENUS.map(renderMenu)}</View>
}

Menus.propTypes = {
  onPressMenu: PropTypes.func.isRequired,
}

Menus.defaultProps = {}

export default Menus
