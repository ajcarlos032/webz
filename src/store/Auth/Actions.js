import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('setAuthenticated', ['authenticated']),

  ...buildCommonActions('signUp', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions('logIn', ['payload', 'method', 'callback'], null, null, ['error']),

  ...buildCommonActions('signOut', null, null, null, ['error']),

  ...buildCommonActions('restorePassword', ['payload', 'callback'], null, ['message'], ['error']),

  ...buildCommonActions('setNewPassword', ['payload'], null, ['message'], ['error']),

  ...buildCommonActions('verificationCode', ['payload', 'callback'], null, null, ['error']),

  ...buildCommonActions(
    'verificationCodeForRestore',
    ['payload', 'callback'],
    null,
    ['message'],
    ['error'],
  ),
})

export const AuthTypes = Types

export default Creators
