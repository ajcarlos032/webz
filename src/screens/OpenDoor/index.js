/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import I18nContext from '@root/i18n/I18nContext'
import { useIsFocused } from '@react-navigation/native'

import ThemeContext from '@root/ThemeContext'

import NavHeader from '@navigation/components/NavHeader'

import Wrapper from '@components/Wrapper'
import SecondaryButton from '@components/Buttons/secondaryButton'

import LobbyDoor from './components/lobbyDoor'
import OfficeDoor from './components/officeDoor'

import { TRANSPARENT } from '@theme/colors'
import styles from './styles'

const closeIcon = require('@assets/icons/ic_screen_close.png')

const TYPE = { LOBBY_DOOR: 0, OFFICE_DOOR: 1 }

const OpenDoor = ({ navigation, route }) => {
  const isFocused = useIsFocused()
  const { t } = useContext(I18nContext)
  const [type, setType] = useState(TYPE.LOBBY_DOOR)
  const { changeTheme } = useContext(ThemeContext)

  const roomId = route.params?.roomId

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: false })
  }, [changeTheme, isFocused])

  const TAB_STATES = useMemo(
    () => [
      { key: 'LOBBY_DOOR', title: t('home.lobbyDoor') },
      { key: 'OFFICE_DOOR', title: t('home.officeDoor') },
    ],
    [t],
  )

  const onBackToApp = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const renderHeaderRight = useMemo(
    () => (
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
    ),
    [navigation],
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
          renderLabel={({ route: _route, focused }) => (
            <Text style={[styles.tabLabel, focused && styles.tabFocusedLabel]}>{_route.title}</Text>
          )}
          onTabPress={({ route: _route }) => setType(TYPE[_route.key])}
          onTabLongPress={({ route: _route }) => setType(TYPE[_route.key])}
        />
      </View>
    ),
    [],
  )

  return (
    <Wrapper>
      <NavHeader title={t('home.openDoorTitle')} navRight={renderHeaderRight} />
      <SafeAreaView style={styles.area}>
        <View style={styles.container}>
          <TabView
            navigationState={{ index: type, routes: TAB_STATES }}
            renderTabBar={renderTabBar}
            renderScene={SceneMap({
              LOBBY_DOOR: () => <LobbyDoor roomId={roomId} />,
              OFFICE_DOOR: () => <OfficeDoor />,
            })}
            onIndexChange={(index) => setType(TYPE[Object.keys(TYPE)[index]])}
            sceneContainerStyle={styles.scenesContainer}
          />
        </View>
        <SecondaryButton
          wrapperStyle={styles.backToAppButton}
          onPress={onBackToApp}
          text={t('home.backToApp')}
        />
      </SafeAreaView>
    </Wrapper>
  )
}

OpenDoor.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

OpenDoor.defaultProps = {}

export default OpenDoor
