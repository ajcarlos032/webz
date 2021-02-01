import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { teamSelector, teamsMeGuestIdsSelector } from '@store/Team/Select'

import NoData from '@components/NoData'
import Team from './team'

import { TEAM_TYPE } from '@screens/MyAccount/screens/Teams/screens/shared/constants'

const OtherTeams = () => {
  const navigation = useNavigation()
  const { fetchTeamsLoading } = useSelector(teamSelector)

  const teams = useSelector(teamsMeGuestIdsSelector)

  const onPressTeam = useCallback(
    (id) => {
      navigation.navigate('Team', { id, type: TEAM_TYPE.OTHER_TEAM })
    },
    [navigation],
  )

  return (
    <FlatList
      data={teams}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Team id={item} type={TEAM_TYPE.OTHER_TEAM} onPressTeam={onPressTeam} />
      )}
      ListEmptyComponent={<NoData loading={fetchTeamsLoading} />}
      keyExtractor={(item) => item}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

OtherTeams.propTypes = {}

OtherTeams.defaultProps = {}

export default OtherTeams
