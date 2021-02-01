import { client } from '@root/apollo'
import { myTeamsQuery, teamsQuery, teamQuery } from '../queries'
import {
  createTeamMutation,
  addTeamMemberMutation,
  attachBookingToTeamMutation,
} from '../mutations'

export const fetchMyTeams = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: myTeamsQuery })
      .then((result) => {
        resolve(result.data.myTeams)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchTeams = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: teamsQuery })
      .then((result) => {
        resolve(result.data.teams)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchTeam = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: teamQuery })
      .then((result) => {
        resolve(result.data.team)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const createTeam = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: createTeamMutation, variables: payload })
      .then((result) => {
        resolve(result.data.createTeam)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const addTeamMember = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: addTeamMemberMutation, variables: payload })
      .then((result) => {
        resolve(result.data.addTeamMember)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const attachBookingToTeam = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: attachBookingToTeamMutation, variables: payload })
      .then((result) => {
        resolve(result.data.attachBookingToTeam)
      })
      .catch((error) => {
        reject(error)
      })
  })
