import React, { useCallback, useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { myTeamByIdSelector } from '@store/User/Select'
import { teamByIdSelector } from '@store/Team/Select'

import I18nContext from '@root/i18n/I18nContext'

import { TEAM_TYPE } from '@screens/MyAccount/screens/Teams/screens/shared/constants'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import Messages from '@components/Messages'

import InfoModal from './components/InfoModal'

import styles from './styles'

const infoIcon = require('@assets/icons/ic_info.png')

const Ticket = ({ route }) => {
  const { t } = useContext(I18nContext)
  const [showInfoModal, setShowInfoModal] = useState(false)

  const team = useSelector(
    route?.params?.type === TEAM_TYPE.MY_TEAM
      ? myTeamByIdSelector(route?.params?.id)
      : teamByIdSelector(route?.params?.id),
  )

  const onViewTeamInfo = useCallback(() => {
    setShowInfoModal(true)
  }, [])

  const headerLeft = useMemo(
    () => (
      <View style={styles.headerLeft}>
        <Text style={styles.teamName}>{team?.title}</Text>
        <Text style={styles.teamMembers}>
          {`${team?.members?.length || 0} ${t('account.members')}`}
        </Text>
      </View>
    ),
    [t, team],
  )

  const headerRight = useMemo(
    () => (
      <TouchableOpacity style={styles.headerRightButton} onPress={onViewTeamInfo}>
        <Image source={infoIcon} style={styles.headerRightIcon} />
      </TouchableOpacity>
    ),
    [onViewTeamInfo],
  )

  const getTeam = useCallback(() => team, [team])

  return (
    <AccountScreenWrapper headerLeft={headerLeft} headerRight={headerRight}>
      <SafeAreaView style={styles.area}>
        <Messages onSend={() => null} />
      </SafeAreaView>
      {showInfoModal && <InfoModal getTeam={getTeam} onClose={() => setShowInfoModal(false)} />}
    </AccountScreenWrapper>
  )
}

Ticket.propTypes = {
  route: PropTypes.object.isRequired,
}

Ticket.defaultProps = {}

export default Ticket
