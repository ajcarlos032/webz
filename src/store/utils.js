import { upperCase } from 'lodash'

export const buildObjectFromArray = (arr, key = 'id') => {
  const obj = {}
  if (arr?.length) arr.forEach((item) => (obj[`${key}_${item.id}`] = item))

  return obj
}

export const buildObjectFromObject = (obj, key = 'id') => {
  const _obj = {}
  if (obj && Boolean(Object.keys(obj).length)) _obj[`${key}_${obj.id}`] = obj

  return _obj
}

/**
 * Generate common actions
 * @param {String} key: main key prefix: signIn
 * @param {Array | null} param: parameters which is handled. e.g. ['payload', 'callback']
 * @return {Object}: e.g.
 *  {
 *    signIn: ['payload'], // SIGN_IN
 *    signInLoading: null, // SIGN_IN_LOADING
 *    signInSuccess: ['result'], // SIGN_IN_SUCCESS
 *    signInFailure: ['error'], //SIGN_IN_FAILURE
 *  }
 */
export const buildCommonActions = (
  key,
  indexParams = undefined,
  loadingParams = undefined,
  successParams = undefined,
  failureParams = undefined,
) => {
  const actions = {}
  if (indexParams !== undefined) actions[`${key}`] = indexParams
  if (loadingParams !== undefined) actions[`${key}Loading`] = loadingParams
  if (successParams !== undefined) actions[`${key}Success`] = successParams
  if (failureParams !== undefined) actions[`${key}Failure`] = failureParams

  return actions
}

/**
 * Generate states
 * @param {String} key: String. e.g. signIn
 * @param {Object} param: Object: e.g. {loading: false, success: false, failure: true, error: 'Something went wrong'}
 * @return {Object} e.g.
 *  {
 *    signInLoading: false,
 *    signInSuccess: false,
 *    signInFailure: true,
 *    signInErrorMessage: 'Something went wrong`,
 *  }
 */
export const buildCommonState = (
  key,
  { loading = false, success = false, failure = false, error = null } = {},
) => {
  return {
    [`${key}Loading`]: loading,
    [`${key}Success`]: success,
    [`${key}Failure`]: failure,
    [`${key}ErrorMessage`]: error,
  }
}

/**
 * Generate common reducers
 * @param {Reducer Types} types e.g. AuthTypes
 * @param {Object} funcs: Reducer functions. e.g. {signInLoading, signInSuccess, signInFailure}
 * @return {Object}. e.g.
 *  {
 *    AuthTypes.SIGN_IN_LOADING: signInLoading,
 *    AuthTypes.SIGN_IN_SUCCESS: signInSuccess,
 *    AuthTypes.SIGN_IN_FAILURE: signInFailure,
 *  }
 */
export const buildCommonReducer = (types, funcs) => {
  const constantCase = (str) => upperCase(str).replace(/ /g, '_')

  const reducer = {}
  Object.keys(funcs).forEach((funcName) => {
    const key = constantCase(funcName)
    reducer[types[key]] = funcs[funcName]
  })

  return reducer
}
