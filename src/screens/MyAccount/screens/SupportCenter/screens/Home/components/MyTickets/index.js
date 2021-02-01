/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import I18nContext from '@root/i18n/I18nContext'

import ActiveTickets from './components/activeTickets'
import CompletedTickets from './components/completedTickets'

import { TRANSPARENT } from '@theme/colors'
import styles from './styles'

const TICKET_STATE = { ACTIVE: 0, COMPLETE: 1 }

const MyTickets = () => {
  const { t } = useContext(I18nContext)
  const [ticketState, setTicketState] = useState(TICKET_STATE.ACTIVE)

  const TAB_STATES = useMemo(
    () => [
      { key: 'ACTIVE', title: t('common.active') },
      { key: 'COMPLETE', title: t('common.complete') },
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
          onTabPress={({ route }) => setTicketState(TICKET_STATE[route.key])}
          onTabLongPress={({ route }) => setTicketState(TICKET_STATE[route.key])}
        />
      </View>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index: ticketState, routes: TAB_STATES }}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          ACTIVE: ActiveTickets,
          COMPLETE: CompletedTickets,
        })}
        onIndexChange={(index) => setTicketState(TICKET_STATE[Object.keys(TICKET_STATE)[index]])}
        sceneContainerStyle={styles.scenesContainer}
      />
    </View>
  )
}

MyTickets.propTypes = {}

MyTickets.defaultProps = {}

export default MyTickets
