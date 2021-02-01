/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { useIsFocused } from '@react-navigation/native'

import I18nContext from '@root/i18n/I18nContext'
import ThemeContext from '@root/ThemeContext'
import RoomInfoContext from './roomInfoContext'

import NavHeader from '@navigation/components/NavHeader'

import Wrapper from '@components/Wrapper'

import RoomMap from './components/RoomMap'
import Panorama from './components/Panorama'

import { TRANSPARENT } from '@theme/colors'
import styles from './styles'

const TYPE = { MAP: 0, PANORAMA: 1 }

const RoomLocationN3d = ({ route }) => {
  const { t } = useContext(I18nContext)
  const { changeTheme } = useContext(ThemeContext)
  const isFocused = useIsFocused()
  const [type, setType] = useState(TYPE.MAP)

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: false })
  }, [changeTheme, isFocused])

  const TAB_STATES = useMemo(
    () => [
      { key: 'MAP', title: t('home.map') },
      { key: 'PANORAMA', title: t('home.360panorama') },
    ],
    [t],
  )

  const renderTabBar = useMemo(
    () => (props) => (
      <View style={styles.tabBarContainer}>
        <TabBar
          {...props}
          indicatorStyle={styles.tabIndicator}
          style={styles.tabBar}
          tabStyle={styles.tab}
          pressColor={TRANSPARENT}
          renderLabel={({ route: tabRoute, focused }) => (
            <Text style={[styles.tabLabel, focused && styles.tabFocusedLabel]}>
              {tabRoute.title}
            </Text>
          )}
          onTabPress={({ route: tabRoute }) => setType(TYPE[tabRoute.key])}
          onTabLongPress={({ route: tabRoute }) => setType(TYPE[tabRoute.key])}
        />
      </View>
    ),
    [],
  )

  return (
    <Wrapper>
      <NavHeader hasBack />
      <View style={styles.container}>
        <RoomInfoContext.Provider
          value={{ images: route.params?.room?.images, location: route.params?.room?.location }}
        >
          <TabView
            navigationState={{ index: type, routes: TAB_STATES }}
            renderTabBar={renderTabBar}
            renderScene={SceneMap({
              MAP: RoomMap,
              PANORAMA: Panorama,
            })}
            swipeEnabled={false}
            onIndexChange={(index) => setType(TYPE[Object.keys(TYPE)[index]])}
            sceneContainerStyle={styles.scenesContainer}
          />
        </RoomInfoContext.Provider>
      </View>
    </Wrapper>
  )
}

RoomLocationN3d.propTypes = {
  route: PropTypes.object.isRequired,
}

RoomLocationN3d.defaultProps = {}

export default RoomLocationN3d
