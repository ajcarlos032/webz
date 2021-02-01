import { buildCommonState } from '@store/utils'

export const INITIAL_STATE = {
  categories: [],

  faqs: {
    data: {},
    ids: [],
    timestamp: null,
  },

  ...buildCommonState('fetchFaqCategories'),
  ...buildCommonState('fetchFaqs'),
}
