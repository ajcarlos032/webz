import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { teamSelector } from '@store/Team/Select'
import { myTeamIdsSelector } from '@store/User/Select'

import NoData from '@components/NoData'
import Team from './team'

import { TEAM_TYPE } from '@screens/MyAccount/screens/Teams/screens/shared/constants'

const MyTeams = () => {
  const navigation = useNavigation()
  const { fetchMyTeamsLoading } = useSelector(teamSelector)

  const teams = useSelector(myTeamIdsSelector)

  const onPressTeam = useCallback(
    (id) => {
      navigation.navigate('Team', { id, type: TEAM_TYPE.MY_TEAM })
    },
    [navigation],
  )

  return (
    <FlatList
      data={teams}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Team id={item} type={TEAM_TYPE.MY_TEAM} onPressTeam={onPressTeam} />
      )}
      ListEmptyComponent={<NoData loading={fetchMyTeamsLoading} />}
      keyExtractor={(item) => item}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

MyTeams.propTypes = {}

MyTeams.defaultProps = {}

export default MyTeams
