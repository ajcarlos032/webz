import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const aboutUsIcon = require('@assets/icons/ic_about_us.png')
const aboutOfficesIcon = require('@assets/icons/ic_about_offices.png')
const aboutWorkspaceIcon = require('@assets/icons/ic_about_workspaces.png')
const articlesIcon = require('@assets/icons/ic_articles.png')
const contactsIcon = require('@assets/icons/ic_contact.png')

const MENUS = [
  {
    icon: aboutUsIcon,
    key: 'aboutUs',
    screen: 'AboutUs',
  },
  {
    icon: aboutOfficesIcon,
    key: 'aboutOffices',
    screen: 'AboutOffices',
  },
  {
    icon: aboutWorkspaceIcon,
    key: 'aboutWorkspace',
    screen: 'AboutWorkspace',
  },
  {
    icon: articlesIcon,
    key: 'articles',
    screen: 'Articles',
  },
  {
    icon: contactsIcon,
    key: 'contacts',
    screen: 'Contacts',
  },
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
        <View style={styles.iconContainer}>
          <Image source={menu.icon} style={styles.icon} />
        </View>
        <Text style={styles.label}>{t(`more.${menu.key}`)}</Text>
        <View style={styles.spacing} />
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
