import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import TeamActions from '@store/Team/Actions'
import { teamSelector } from '@store/Team/Select'
import { myTeamIdsSelector, userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import Initial from './components/Initial'
import AllTeams from './components/AllTeams'
import NewTeamModal from './components/NewTeamModal'
import SuccessModal from './components/SuccessModal'

import { shouldRefetch } from '@helpers/utils'

import styles from './styles'

const addIcon = require('@assets/icons/ic_plus.png')

const Teams = () => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const [showNewModal, setShowNewModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const {
    fetchTeamsLoading,
    createTeamLoading,
    teams: { ids: meGuestTeamIds, timestamp: teams_timestamp },
  } = useSelector(teamSelector)

  const myTeamIds = useSelector(myTeamIdsSelector)

  const {
    teams: { timestamp: myTeam_timestamp },
  } = useSelector(userSelector)

  // fetch teams
  useEffect(() => {
    if (!isFocused) return

    if (shouldRefetch(teams_timestamp)) dispatch(TeamActions.fetchTeams())
  }, [isFocused, dispatch, teams_timestamp])

  // fetch my teams
  useEffect(() => {
    if (!isFocused) return

    if (shouldRefetch(myTeam_timestamp)) dispatch(TeamActions.fetchMyTeams())
  }, [isFocused, dispatch, myTeam_timestamp])

  const onCreateTeam = useCallback(
    (payload) => {
      console.log('Creating team...')
      console.log({ payload })
      setShowNewModal(false)
      dispatch(
        TeamActions.createTeam(payload, () => {
          setShowSuccessModal(true)
        }),
      )
    },
    [dispatch],
  )

  const headerRight = useMemo(
    () => (
      <TouchableOpacity style={styles.headerRightButton} onPress={() => setShowNewModal(true)}>
        <Image source={addIcon} style={styles.headerRightIcon} />
      </TouchableOpacity>
    ),
    [],
  )

  const body = useMemo(() => {
    if (createTeamLoading) return null
    if (Boolean(myTeamIds?.length) || Boolean(meGuestTeamIds?.length)) return <AllTeams />

    return <Initial onCreateTeam={() => setShowNewModal(true)} />
  }, [createTeamLoading, meGuestTeamIds, myTeamIds])

  return (
    <AccountScreenWrapper
      loading={fetchTeamsLoading || createTeamLoading}
      title={t('account.teams')}
      headerRight={headerRight}
    >
      <SafeAreaView style={styles.area}>{body}</SafeAreaView>
      {showNewModal && (
        <NewTeamModal
          onCreate={onCreateTeam}
          loading={createTeamLoading}
          onClose={() => setShowNewModal(false)}
        />
      )}
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
    </AccountScreenWrapper>
  )
}

Teams.propTypes = {}

Teams.defaultProps = {}

export default Teams
