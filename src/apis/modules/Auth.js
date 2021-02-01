import { client } from '@root/apollo'
import { logInQuery, sendVerificationQuery, verifyOTPQuery } from '../queries'
import {
  signupMutation,
  restorePasswordMutation,
  setNewPasswordMutation,
  verifyPhoneForRestorePasswordMutation,
} from '../mutations'

import { LOGIN_METHOD } from '@screens/Auth/shared/constants'

export const logIn = (payload, method) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        query: method === LOGIN_METHOD.EMAIL ? logInQuery : verifyOTPQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(method === LOGIN_METHOD.EMAIL ? result.data.authenticate : result.data.verify)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const signup = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: signupMutation, variables: payload })
      .then((result) => {
        resolve(result.data.signUp)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const restorePassword = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: restorePasswordMutation, variables: payload })
      .then((result) => {
        resolve(result.data.restorePassword)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const setNewPassword = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: setNewPasswordMutation, variables: payload })
      .then((result) => {
        resolve(result.data.newPassword)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const verificationCode = (payload) =>
  new Promise((resolve, reject) => {
    client
      .query({ query: sendVerificationQuery, variables: payload })
      .then((result) => {
        resolve(result.data.sendVerification)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const verifyPhoneForRestorePassword = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: verifyPhoneForRestorePasswordMutation, variables: payload })
      .then((result) => {
        resolve(result.data.verifyPhone)
      })
      .catch((error) => {
        reject(error)
      })
  })
