import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  authenticated: false,

  ...buildCommonState('signUp'),
  ...buildCommonState('logIn'),
  ...buildCommonState('signOut'),
  ...buildCommonState('restorePassword'),
  ...buildCommonState('setNewPassword'),
  ...buildCommonState('verificationCode'),
  ...buildCommonState('verificationCodeForRestore'),
}
