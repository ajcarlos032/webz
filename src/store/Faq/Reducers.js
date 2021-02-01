/* eslint-disable sort-keys */
import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { FaqTypes } from './Actions'

import { buildObjectFromArray, buildCommonState, buildCommonReducer } from '@store/utils'

// fetchFaqCategories

const fetchFaqCategoriesLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchFaqCategories', { loading: true }),
})

const fetchFaqCategoriesSuccess = (state, { result }) => {
  return {
    ...state,
    categories: result,
    ...buildCommonState('fetchFaqCategories', { success: true }),
  }
}

const fetchFaqCategoriesFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchFaqCategories', { failure: true, error }),
})

// fetchFaqs

const fetchFaqsLoading = (state) => ({
  ...state,
  ...buildCommonState('fetchFaqs', { loading: true }),
})

const fetchFaqsSuccess = (state, { result }) => ({
  ...state,
  faqs: {
    ...state.data,
    data: buildObjectFromArray(result, 'faq'),
    ids: result.map(({ id }) => id),
    timestamp: new Date().getTime(),
  },
  ...buildCommonState('fetchFaqs', { success: true }),
})

const fetchFaqsFailure = (state, { error }) => ({
  ...state,
  ...buildCommonState('fetchFaqs', { failure: true, error }),
})

export const reducer = createReducer(INITIAL_STATE, {
  ...buildCommonReducer(FaqTypes, {
    fetchFaqCategoriesLoading,
    fetchFaqCategoriesSuccess,
    fetchFaqCategoriesFailure,

    fetchFaqsLoading,
    fetchFaqsSuccess,
    fetchFaqsFailure,
  }),
})
