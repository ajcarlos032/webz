import { client } from '@root/apollo'
import { pushNotificationsQuery } from '../queries'

import { makeNotificationSeenMutation, registerFCMTokenMutation } from '../mutations'

export const fetchNotifications = (payload) =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: pushNotificationsQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.pushNotifications)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const makeNotificationSeen = (id) =>
  new Promise((resolve, reject) => {
    console.log({ id })
    client
      .mutate({
        mutation: makeNotificationSeenMutation,
        variables: { id },
      })
      .then((result) => {
        resolve(result.data.makeNotificationSeen)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const registerFCMToken = (token) =>
  new Promise((resolve, reject) => {
    client
      .mutate({
        mutation: registerFCMTokenMutation,
        variables: { token },
      })
      .then((result) => {
        resolve(result.data.updateToken)
      })
      .catch((error) => {
        reject(error)
      })
  })
