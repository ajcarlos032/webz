/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

// const teamIcon = require('@assets/icons/ic_members.png')
const supportIcon = require('@assets/icons/ic_support.png')
const settingIcon = require('@assets/icons/ic_setting.png')
const upgradeIcon = require('@assets/icons/ic_upgrade.png')
const transactionsIcon = require('@assets/icons/ic_time.png')
const reviewsIcon = require('@assets/icons/ic_reviews.png')
const paymentMethodIcon = require('@assets/icons/ic_payment_methods.png')
const faqIcon = require('@assets/icons/ic_info.png')
const logoutIcon = require('@assets/icons/ic_logout.png')

const MENUS = [
  // {
  //   icon: teamIcon,
  //   key: 'teams',
  //   screen: 'Teams',
  // },
  {
    icon: supportIcon,
    key: 'supportCenter',
    screen: 'SupportCenter',
  },
  {
    icon: settingIcon,
    key: 'accountSettings',
    screen: 'AccountSettings',
  },
  {
    icon: upgradeIcon,
    key: 'upgradeAccount',
    screen: 'UpgradeAccount',
  },
  {
    icon: transactionsIcon,
    key: 'transactionHistory',
    screen: 'TransactionHistory',
  },
  {
    icon: reviewsIcon,
    key: 'myReviews',
    screen: 'MyReviews',
  },
  // {
  //   icon: paymentMethodIcon,
  //   key: 'paymentMethods',
  //   screen: 'PaymentMethods',
  // },
  {
    icon: faqIcon,
    key: 'faq',
    screen: 'FAQ',
  },
  {
    icon: logoutIcon,
    key: 'logout',
    screen: 'logout',
  },
]

const Menus = ({ onPressMenu }) => {
  const { isRTL } = useSelector(configSelector)
  const { t } = useContext(I18nContext)

  const renderMenu = useCallback(
    (menu) => (
      <TouchableOpacity
        key={menu.key}
        style={styles.menuRow}
        onPress={() => onPressMenu(menu.screen)}
      >
        <View style={styles.iconContainer}>
          <Image source={menu.icon} style={styles.icon} />
        </View>
        <Text style={styles.label}>{t(`account.${menu.key}`)}</Text>
        <View style={styles.spacing} />
        {menu.screen !== 'logout' && (
          <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
        )}
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
