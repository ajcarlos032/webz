import { all, takeLatest } from 'redux-saga/effects'
import { AuthTypes } from '@store/Auth/Actions'

import signUp from './signUp'
import signUpSuccess from './signUp/success'
import signUpFailure from './signUp/failure'

import logIn from './logIn'
import logInSuccess from './logIn/success'
import logInFailure from './logIn/failure'

import signOut from './signOut'
import signOutSuccess from './signOut/success'
import signOutFailure from './signOut/failure'

import restorePassword from './restorePassword'
import restorePasswordSuccess from './restorePassword/success'
import restorePasswordFailure from './restorePassword/failure'

import setNewPassword from './setNewPassword'
import setNewPasswordSuccess from './setNewPassword/success'
import setNewPasswordFailure from './setNewPassword/failure'

import verificationCode from './verificationCode'
import verificationCodeSuccess from './verificationCode/success'
import verificationCodeFailure from './verificationCode/failure'

import verificationCodeForRestore from './verificationCodeForRestore'
import verificationCodeForRestoreSuccess from './verificationCodeForRestore/success'
import verificationCodeForRestoreFailure from './verificationCodeForRestore/failure'

export default function* root() {
  yield all([
    // Sign up.
    takeLatest(AuthTypes.SIGN_UP, signUp),
    takeLatest(AuthTypes.SIGN_UP_SUCCESS, signUpSuccess),
    takeLatest(AuthTypes.SIGN_UP_FAILURE, signUpFailure),

    // Log in.
    takeLatest(AuthTypes.LOG_IN, logIn),
    takeLatest(AuthTypes.LOG_IN_SUCCESS, logInSuccess),
    takeLatest(AuthTypes.LOG_IN_FAILURE, logInFailure),

    // Sign out.
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_OUT_SUCCESS, signOutSuccess),
    takeLatest(AuthTypes.SIGN_OUT_FAILURE, signOutFailure),

    // Restore password Link.
    takeLatest(AuthTypes.SET_NEW_PASSWORD, setNewPassword),
    takeLatest(AuthTypes.SET_NEW_PASSWORD_SUCCESS, setNewPasswordSuccess),
    takeLatest(AuthTypes.SET_NEW_PASSWORD_FAILURE, setNewPasswordFailure),

    // Restore password.
    takeLatest(AuthTypes.RESTORE_PASSWORD, restorePassword),
    takeLatest(AuthTypes.RESTORE_PASSWORD_SUCCESS, restorePasswordSuccess),
    takeLatest(AuthTypes.RESTORE_PASSWORD_FAILURE, restorePasswordFailure),

    // Get verification code.
    takeLatest(AuthTypes.VERIFICATION_CODE, verificationCode),
    takeLatest(AuthTypes.VERIFICATION_CODE_SUCCESS, verificationCodeSuccess),
    takeLatest(AuthTypes.VERIFICATION_CODE_FAILURE, verificationCodeFailure),

    // Get verification code fore restoring password.
    takeLatest(AuthTypes.VERIFICATION_CODE_FOR_RESTORE, verificationCodeForRestore),
    takeLatest(AuthTypes.VERIFICATION_CODE_FOR_RESTORE_SUCCESS, verificationCodeForRestoreSuccess),
    takeLatest(AuthTypes.VERIFICATION_CODE_FOR_RESTORE_FAILURE, verificationCodeForRestoreFailure),
  ])
}
