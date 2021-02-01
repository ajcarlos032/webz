/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { TeamTypes } from './Actions'
import { buildObjectFromArray, buildCommonState, buildCommonReducer } from '@store/utils'

// fetchTeams

const fetchTeamsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchTeams', { loading: true }),
})

const fetchTeamsSuccess = (state, { result }) => {
  const teams = {
    data: buildObjectFromArray(result, 'team'),
    ids: (result || []).map(({ id }) => id),
    timestamp: new Date().getTime(),
  }
  return {
    ...state,
    teams,
    ...buildCommonState('fetchTeams', { success: true }),
  }
}

const fetchTeamsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchTeams', { failure: true, error }),
})

// fetchMyTeams

const fetchMyTeamsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchMyTeams', { loading: true }),
})

const fetchMyTeamsSuccess = (state) => ({
  ...state,
  ...buildCommonState('fetchMyTeams', { success: true }),
})

const fetchMyTeamsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchMyTeams', { failure: true, error }),
})

// createTeam

const createTeamLoading = (state) => ({
  ...state,
  ...buildCommonState('createTeam', { loading: true }),
})

const createTeamSuccess = (state) => ({
  ...state,
  ...buildCommonState('createTeam', { success: true }),
})

const createTeamFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('createTeam', { failure: true, error }),
})

// addMember

const addMemberLoading = (state) => ({
  ...state,
  ...buildCommonState('addMember', { loading: true }),
})

const addMemberSuccess = (state) => ({
  ...state,
  ...buildCommonState('addMember', { success: true }),
})

const addMemberFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('addMember', { failure: true, error }),
})
// attachBooking

const attachBookingLoading = (state) => ({
  ...state,
  ...buildCommonState('attachBooking', { loading: true }),
})

const attachBookingSuccess = (state) => ({
  ...state,
  ...buildCommonState('attachBooking', { success: true }),
})

const attachBookingFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('attachBooking', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(TeamTypes, {
    fetchTeamsLoading,
    fetchTeamsSuccess,
    fetchTeamsFailure,

    fetchMyTeamsLoading,
    fetchMyTeamsSuccess,
    fetchMyTeamsFailure,

    createTeamLoading,
    createTeamSuccess,
    createTeamFailure,

    addMemberLoading,
    addMemberSuccess,
    addMemberFailure,

    attachBookingLoading,
    attachBookingSuccess,
    attachBookingFailure,
  }),
})
