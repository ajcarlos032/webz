import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import I18nContext from '@root/i18n/I18nContext'

import { myTeamByIdSelector } from '@store/User/Select'
import { teamByIdSelector } from '@store/Team/Select'

import Card from '@components/Card'

import { UTCToLocalTime } from '@helpers/utils'
import { DARK_BLUE, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  LINE_HEIGHT12,
  LINE_HEIGHT16,
  LINE_HEIGHT18,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H3, DIM_H6, DIM_V3, DIM_V5, DIM_V8, HORIZONTAL_DIM } from '@root/constants'

import { TEAM_TYPE } from '@screens/MyAccount/screens/Teams/screens/shared/constants'

const Team = ({ id, type, onPressTeam }) => {
  const { t } = useContext(I18nContext)

  const team = useSelector(
    type === TEAM_TYPE.MY_TEAM ? myTeamByIdSelector(id) : teamByIdSelector(id),
  )

  return (
    <View style={styles.container}>
      <Card>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.teamItem}
          onPress={() => onPressTeam(id)}
        >
          <View style={styles.header}>
            <View style={styles.teamContent}>
              <Text style={styles.name}>{team.title}</Text>
              <Text style={styles.dateTime}>{UTCToLocalTime(team.created_at)}</Text>
            </View>
            {!!team.booking?.room?.name && (
              <Text style={styles.description} numberOfLines={2}>
                {team.booking?.room?.name}
              </Text>
            )}
          </View>
          <View style={styles.membersContainer}>
            <View style={styles.memberNumContainer}>
              <Text style={styles.memberNumber}>{team.members?.length || 0}</Text>
            </View>
            <Text style={styles.members}>{t('account.members')}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  dateTime: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT18,
  },
  description: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
  },
  header: {
    flexDirection: 'column',
  },
  memberNumber: {
    color: WHITE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XS,
    lineHeight: LINE_HEIGHT12,
  },
  memberNumContainer: {
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    borderRadius: DIM_V8 / 2,
    height: DIM_V8,
    justifyContent: 'center',
    width: DIM_V8,
  },
  members: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT16,
    marginLeft: DIM_H3,
  },
  membersContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: DIM_V3,
  },
  name: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
  },
  teamContent: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamItem: {
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V5,
    width: '100%',
  },
})

Team.propTypes = {
  id: PropTypes.string.isRequired,
  onPressTeam: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
}

Team.defaultProps = {}

export default Team
