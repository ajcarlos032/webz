/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import I18nContext from '@root/i18n/I18nContext'

import MyTeams from './components/myTeams'
import OtherTeams from './components/otherTeams'

import { TRANSPARENT } from '@theme/colors'
import styles from './styles'

const TEAM_TYPE = { MINE: 0, OTHER: 1 }

const AllTeams = () => {
  const { t } = useContext(I18nContext)
  const [teamType, setTeamType] = useState(TEAM_TYPE.MINE)

  const TAB_STATES = useMemo(
    () => [
      { key: 'MINE', title: t('account.myTeams') },
      { key: 'OTHER', title: t('account.iAmAGuest') },
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
          renderLabel={({ route, focused }) => (
            <Text style={[styles.tabLabel, focused && styles.tabFocusedLabel]}>{route.title}</Text>
          )}
          onTabPress={({ route }) => setTeamType(TEAM_TYPE[route.key])}
          onTabLongPress={({ route }) => setTeamType(TEAM_TYPE[route.key])}
        />
      </View>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index: teamType, routes: TAB_STATES }}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          MINE: MyTeams,
          OTHER: OtherTeams,
        })}
        onIndexChange={(index) => setTeamType(TEAM_TYPE[Object.keys(TEAM_TYPE)[index]])}
        sceneContainerStyle={styles.scenesContainer}
      />
    </View>
  )
}

AllTeams.propTypes = {}

AllTeams.defaultProps = {}

export default AllTeams
