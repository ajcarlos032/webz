/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { AuthTypes } from './Actions'
import { buildCommonState, buildCommonReducer } from '@store/utils'

const setAuthenticated = (state, { authenticated }) => ({
  ...state,
  authenticated,
})

// signUp

const signUpLoading = (state) => ({
  ...state,
  ...buildCommonState('signUp', { loading: true }),
})

const signUpSuccess = (state) => ({
  ...state,
  ...buildCommonState('signUp', { success: true }),
})

const signUpFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('signUp', { failure: true, error }),
})

// logIn

const logInLoading = (state) => ({
  ...state,
  ...buildCommonState('logIn', { loading: true }),
})

const logInSuccess = (state) => ({
  ...state,
  authenticated: true,
  ...buildCommonState('logIn', { success: true }),
})

const logInFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('logIn', { failure: true, error }),
})

// Sign out

const signOutLoading = (state) => ({
  ...state,
  ...buildCommonState('signOut', { loading: true }),
})

const signOutSuccess = (state) => ({
  ...state,
  authenticated: false,
  ...buildCommonState('signOut', { success: true }),
})

const signOutFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('signOut', { failure: true, error }),
})

// restore password

const restorePasswordLoading = (state) => ({
  ...state,
  ...buildCommonState('restorePassword', { loading: true }),
})

const restorePasswordSuccess = (state) => ({
  ...state,
  ...buildCommonState('restorePassword', { success: true }),
})

const restorePasswordFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('restorePassword', { failure: true, error }),
})

// set new password

const setNewPasswordLoading = (state) => ({
  ...state,
  ...buildCommonState('setNewPassword', { loading: true }),
})

const setNewPasswordSuccess = (state) => ({
  ...state,
  ...buildCommonState('setNewPassword', { success: true }),
})

const setNewPasswordFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('setNewPassword', { failure: true, error }),
})

// get verificationCode

const verificationCodeLoading = (state) => ({
  ...state,
  ...buildCommonState('verificationCode', { loading: true }),
})

const verificationCodeSuccess = (state) => ({
  ...state,
  ...buildCommonState('verificationCode', { success: true }),
})

const verificationCodeFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('verificationCode', { failure: true, error }),
})

// get verificationCode for restoring password

const verificationCodeForRestoreLoading = (state) => ({
  ...state,
  ...buildCommonState('verificationCodeForRestore', { loading: true }),
})

const verificationCodeForRestoreSuccess = (state) => ({
  ...state,
  ...buildCommonState('verificationCodeForRestore', { success: true }),
})

const verificationCodeForRestoreFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('verificationCodeForRestore', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(AuthTypes, {
    setAuthenticated,

    signUpLoading,
    signUpSuccess,
    signUpFailure,

    logInLoading,
    logInSuccess,
    logInFailure,

    signOutLoading,
    signOutSuccess,
    signOutFailure,

    restorePasswordLoading,
    restorePasswordSuccess,
    restorePasswordFailure,

    setNewPasswordLoading,
    setNewPasswordSuccess,
    setNewPasswordFailure,

    verificationCodeLoading,
    verificationCodeSuccess,
    verificationCodeFailure,

    verificationCodeForRestoreLoading,
    verificationCodeForRestoreSuccess,
    verificationCodeForRestoreFailure,
  }),
})
