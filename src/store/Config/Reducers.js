/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { ConfigTypes } from './Actions'
import { buildCommonState, buildCommonReducer } from '@store/utils'

import { APP_LANGUAGES } from '@root/constants'

// Change Language

const changeLanguageLoading = (state) => ({
  ...state,
  ...buildCommonState('changeLanguage', { loading: true }),
})

const changeLanguageSuccess = (state, { newLang }) => ({
  ...state,
  lang: newLang,
  isRTL: newLang === APP_LANGUAGES.HE,
  ...buildCommonState('changeLanguage', { success: true }),
})

const changeLanguageFailure = (state) => ({
  ...state,
  ...buildCommonState('changeLanguage', { failure: true }),
})

// Accept location usage

const acceptLocationLoading = (state) => ({
  ...state,
  ...buildCommonState('acceptLocation', { loading: true }),
})

const acceptLocationSuccess = (state) => ({
  ...state,
  acceptLocation: true,
  ...buildCommonState('acceptLocation', { success: true }),
})

const acceptLocationFailure = (state) => ({
  ...state,
  ...buildCommonState('acceptLocation', { failure: true }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(ConfigTypes, {
    changeLanguageLoading,
    changeLanguageSuccess,
    changeLanguageFailure,

    acceptLocationLoading,
    acceptLocationSuccess,
    acceptLocationFailure,
  }),
})
