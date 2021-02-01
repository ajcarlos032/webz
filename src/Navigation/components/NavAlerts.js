import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native'

import { useSelector } from 'react-redux'
import { meSelector } from '@store/User/Select'
import { newNotificationIdsSelector } from '@store/Notification/Select'

import { RH, RW } from '@theme/utils'
import { DANGER, DARK_SILVER, SECONDARY, TRANSPARENT, YELLOW, WHITE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_XS, LINE_HEIGHT14 } from '@theme/fonts'
import { DIM_H0, DIM_H1, DIM_H2, DIM_H3, DIM_H7, DIM_H8, DIM_V, DIM_V3 } from '@root/constants'

const likeIcon = require('@assets/icons/ic_heart.png')
const notificationIcon = require('@assets/icons/ic_alert.png')
const searchIcon = require('@assets/icons/ic_nav_search.png')

const NavAlerts = ({ hasSearch, searchActive }) => {
  const navigation = useNavigation()
  const me = useSelector(meSelector)
  const newNotifications = useSelector(newNotificationIdsSelector)

  const badge = useMemo(
    () => (badgeNum) => {
      if (!Boolean(badgeNum)) return null
      const width = badgeNum > 99 ? RW(37) : badgeNum > 9 ? RW(27) : RW(17)
      return (
        <View style={[styles.badgeContainer, { width }]}>
          <Text style={styles.badge}>{badgeNum > 100 ? '100+' : badgeNum}</Text>
        </View>
      )
    },
    [],
  )

  if (!me) return null

  const { favorites_count: favoritesCount } = me

  return (
    <View style={styles.container}>
      {hasSearch && (
        <Ripple
          style={[styles.button, searchActive && styles.searchActive]}
          rippleContainerBorderRadius={RH(18)}
          rippleDuration={300}
          onPressIn={() => navigation.navigate('Search')}
        >
          <Image style={[styles.icon, searchActive && styles.activeIcon]} source={searchIcon} />
        </Ripple>
      )}
      <Ripple
        style={[styles.button, styles.likeButton]}
        rippleContainerBorderRadius={RH(18)}
        rippleDuration={300}
        onPressIn={() => navigation.navigate('Favorites')}
      >
        <Image style={styles.icon} source={likeIcon} />
        {badge(favoritesCount)}
      </Ripple>
      <Ripple
        style={styles.button}
        rippleContainerBorderRadius={RH(18)}
        rippleDuration={300}
        onPressIn={() => navigation.navigate('Notifications')}
      >
        <Image style={styles.icon} source={notificationIcon} />
        {badge(newNotifications?.length)}
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({
  activeIcon: {
    tintColor: WHITE,
  },
  badge: {
    color: WHITE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XS,
    lineHeight: LINE_HEIGHT14,
    textAlign: 'center',
  },
  badgeContainer: {
    alignItems: 'center',
    backgroundColor: DANGER,
    borderRadius: DIM_H3,
    height: RH(18),
    justifyContent: 'center',
    paddingHorizontal: DIM_H1,
    paddingTop: DIM_V,
    position: 'absolute',
    right: -DIM_H0,
    top: -DIM_V3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(18),
    height: RH(36),
    justifyContent: 'center',
    position: 'relative',
    width: RH(36),
  },
  container: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: DIM_H2,
    paddingTop: RH(5),
  },
  icon: {
    resizeMode: 'contain',
    tintColor: DARK_SILVER,
    width: DIM_H7,
  },
  likeButton: {
    marginHorizontal: DIM_H8,
  },
  searchActive: {
    backgroundColor: YELLOW,
  },
})

NavAlerts.propTypes = {
  hasSearch: PropTypes.bool,
  searchActive: PropTypes.bool,
}

NavAlerts.defaultProps = {
  hasSearch: false,
  searchActive: false,
}

export default NavAlerts
