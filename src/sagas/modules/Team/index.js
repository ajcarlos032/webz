import { all, takeLatest } from 'redux-saga/effects'
import { TeamTypes } from '@store/Team/Actions'

import fetchMyTeams from './fetchTeams/myTeams'
import fetchTeams from './fetchTeams/otherTeams'

import createTeam from './createTeam'
import createTeamSuccess from './createTeam/success'
import createTeamFailure from './createTeam/failure'

import addMember from './addMember'
import addMemberSuccess from './addMember/success'
import addMemberFailure from './addMember/failure'

import attachBooking from './attachBooking'
import attachBookingSuccess from './attachBooking/success'
import attachBookingFailure from './attachBooking/failure'

export default function* root() {
  yield all([
    // Fetch my teams.
    takeLatest(TeamTypes.FETCH_MY_TEAMS, fetchMyTeams),

    // Fetch teams.
    takeLatest(TeamTypes.FETCH_TEAMS, fetchTeams),

    // Create team.
    takeLatest(TeamTypes.CREATE_TEAM, createTeam),
    takeLatest(TeamTypes.CREATE_TEAM_SUCCESS, createTeamSuccess),
    takeLatest(TeamTypes.CREATE_TEAM_FAILURE, createTeamFailure),

    // Add team member.
    takeLatest(TeamTypes.ADD_MEMBER, addMember),
    takeLatest(TeamTypes.ADD_MEMBER_SUCCESS, addMemberSuccess),
    takeLatest(TeamTypes.ADD_MEMBER_FAILURE, addMemberFailure),

    // Attach booking to team.
    takeLatest(TeamTypes.ATTACH_BOOKING, attachBooking),
    takeLatest(TeamTypes.ATTACH_BOOKING_SUCCESS, attachBookingSuccess),
    takeLatest(TeamTypes.ATTACH_BOOKING_FAILURE, attachBookingFailure),
  ])
}
