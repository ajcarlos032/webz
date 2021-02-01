import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('fetchFaqCategories', null, null, ['result'], ['error']),

  ...buildCommonActions('fetchFaqs', ['payload'], null, ['result'], ['error']),
})

export const FaqTypes = Types

export default Creators
